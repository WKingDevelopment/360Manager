import React, { useContext, useEffect, useState } from 'react';
import {    Alert } from '../../../../data classes/Alert';
import { reducerConstants } from '../../../../constants/reducer-Constants';
import { FieldsContext } from '../../../../contexts/fields-context';
import { PhasesContext } from '../../../../contexts/phases-context';
import { SessionContext } from '../../../../contexts/session-context';
import { Field } from '../../../../data classes/Field';
import { Fields } from '../../../../data classes/Fields';
import { arrayComparer } from '../../../../functions/array_Functions';
import { isEmptyOrSpace } from '../../../../functions/validations_Functions';
import { AddNewFieldForm } from './AddNewFieldSubForm';
import { FieldsConfigurationForm } from './FieldsConfigurationForm';

const ItemConfigurationForm = () => {
    const [saveDisabled, setSaveDisabled] = useState<boolean>(true);
    const { session } = useContext(SessionContext);
    const { phasesConfig } = useContext(PhasesContext);
    const { fieldsConfig, fieldsDispatch } = useContext(FieldsContext);
    const [mainFields, setMainFields] = useState<Field[]>(fieldsConfig.fields.mainFields)
    const [checklistFields, setChecklistFields] = useState<Field[]>(fieldsConfig.fields.checklistFields)
    const [alert, setAlert] = useState<Alert>(new Alert('',false));

    useEffect(() => {
        const mainSame = arrayComparer(fieldsConfig.fields.mainFields,mainFields);
        const checklistSame = arrayComparer(fieldsConfig.fields.checklistFields,checklistFields);
        if ((!mainSame || !checklistSame) && saveDisabled) {
            setSaveDisabled(false);
        } else if (mainSame && checklistSame && !saveDisabled) {
            setSaveDisabled(true);
        }
      }, [JSON.stringify(mainFields), JSON.stringify(checklistFields), JSON.stringify(fieldsConfig.fields)]);

    const onSave = () => {

    }

    const onAddField = (newField:Field):boolean => {
        const fieldError = (newField.type === 'Checklist') ? newField.ValidityCheck(fieldsConfig.fields.checklistFields) : newField.ValidityCheck(fieldsConfig.fields.mainFields);
        if(isEmptyOrSpace(fieldError)) {
            if(newField.type === 'Checklist'){
                setChecklistFields(checklistFields.concat([newField]));
            } else {
                setMainFields(mainFields.concat([newField]));
            }
            return true
        } else {
            setAlert(new Alert(fieldError, true));
            return false;
        }
    }

    const onUpdateFields = (fields:Field[], type:string) => {
        if (type === 'Main') {
            setMainFields(fields)
        } else {
            setChecklistFields(fields)
        }
    }

    return (
        <div>
            <div className="cont-horiz vert-center">
                <div className="cont-horiz vert-center mrgn-btm sb width-40">
                    <h4>Project Configuration / Item Configuration</h4>
                    <button className="button" disabled={saveDisabled} onClick={onSave}>
                        Save
                    </button>
                </div>
                {alert.text && <div onClick={() => {setAlert(new Alert('',false))}} className={alert.red ? "mrgn-left button-N width-max click mrgn-btm" : "mrgn-left button-Y click width-max mrgn-btm"}>{alert.text}</div>}
            </div>
            <div>
                <AddNewFieldForm phases={phasesConfig.phases.phaseList} onAddField={onAddField}/>
            </div>
            <div className="cont-horiz top">
                <FieldsConfigurationForm updateType="Main" showSize={true} title={fieldTitle} fields={mainFields} onUpdateFields={onUpdateFields}/>
                <FieldsConfigurationForm updateType="Checklist" showSize={false} title={checklistTitle} fields={checklistFields} onUpdateFields={onUpdateFields}/>
            </div>
        </div>
    )
}

const fieldTitle = 'Fields Configuration';

const checklistTitle = 'Checklist Configuration';

export { ItemConfigurationForm }
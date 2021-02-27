import React, { useContext, useEffect, useState } from "react";
import { arrayMove } from "react-sortable-hoc";
import { constants } from "../../../../constants/constants";
import { PhasesContext } from "../../../../contexts/phases-context";
import { Phases } from "../../../../data classes/Phases";
import { arrayComparer } from "../../../../functions/array_Functions";
import { ArrayMoveProps, SortableList } from "../../../shared components/SortableList";

const PhasesConfigurationForm = () => {
  const { phasesConfig, phasesDispatch } = useContext(PhasesContext);

  const [newPhaseLabel, setNewPhaseLabel] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [phases, setPhases] = useState<Phases>(phasesConfig.phases);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [savedPhases, setSavedPhases] = useState<Phases>(phasesConfig.phases);

  useEffect(() => {
    setSavedPhases(phasesConfig.phases)
    setPhases(phasesConfig.phases)
  }, [JSON.stringify(phasesConfig.phases)]);

  useEffect(() => {
    const same = arrayComparer(savedPhases.phaseList, phases.phaseList);
    if (!same && buttonDisabled) {
      setButtonDisabled(false);
    } else if (same && !buttonDisabled) {
      setButtonDisabled(true);
    }
  }, [JSON.stringify(phases.phaseList), JSON.stringify(savedPhases.phaseList)]);

  const onSortEnd = (props: ArrayMoveProps) => {
    if (props.oldIndex !== props.newIndex) {
      const newPhases = arrayMove(
        phases.phaseList,
        props.oldIndex,
        props.newIndex
      );
      if (phases.postOrderChangeChecks(newPhases)) {
        setPhases(phases.setPhases(newPhases));
      }
    }
  };

  const onSave = () => {
  };

  const addNewPhase = () => {
    setError("");
    const error = phases.checkNewPhase(newPhaseLabel);
    if (!error) {
      setPhases(phases.insertPhase(newPhaseLabel));
      setNewPhaseLabel("");
    } else {
      setError(error);
    }
  };

  const onRemove = (newList: string[]) => {
    setPhases(new Phases(newList));
  };

  return (
    <div>
      <div className="cont-horiz vert-center mrgn-btm sb width-40">
        <h4>Project Configuration / Phase Configuration</h4>
        {
          <button className="button" disabled={buttonDisabled} onClick={onSave}>
            Save
          </button>
        }
      </div>
      <div className="cont-border width-40">
          <h5>Add Phase</h5>
          <div className="cont-horiz sa baseline">
          {error && <div className="input-Error">{error}</div>}
          <input
            type="text"
            placeholder="Add Phase"
            value={newPhaseLabel}
            onChange={(e) => setNewPhaseLabel(e.target.value)}
          />
          <button className="button" onClick={addNewPhase}>Add Phase</button>
        </div>
        <p>Drag and drop the phases below to suit your project's life-cycle</p>
        {phases && (
          <div className="small">
          <SortableList
            onRemove={onRemove}
            list={phases.phaseList}
            disabledList={constants.disabledPhases}
            onSortEnd={onSortEnd}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export { PhasesConfigurationForm };

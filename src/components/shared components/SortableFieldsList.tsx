import React from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Field } from "../../data classes/Field";

const SortableFieldsList = React.memo(
  SortableContainer((props: ISortableListProps) => {
    let key: number = -1;

    return (
      <table className="mrgn-btm">
        <thead>
          <tr>
            <th>Label</th>
            <th>Type</th>
            {props.showSize && <th>Size</th>}
            <th>Mandatory Phase</th>
            <th>Summary</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          {props.list.map((field:Field) => {
            key += 1;
            console.log(field instanceof Field)
            const disabled = field && props.disabledLabels && field.containsFieldLabel(props.disabledLabels);
            return (
              <SortableItem
                key={key}
                index={key}
                id={key}
                disabled={disabled}
                showSize={props.showSize}
                onRemove={props.onRemove}
                field={field}
              />
            );
          })}
        </tbody>
      </table>
    );
  })
);

const SortableItem = SortableElement((props: ISortableItemProps) => {
  return (
    <tr className="grabbing" key={props.id}>
        <td className="noselect">{props.field.label}</td>
        <td className="noselect">{props.field.type}</td>
        {props.showSize && <td className="noselect">{props.field.size}</td>}
        <td className="noselect">{props.field.mandatoryPhase}</td>
        <td> {props.field.summary ? <div className="noselect button-Y">Yes</div> : <div className="noselect button-N">No</div>}</td>
        <td className="noselect">
          {!props.disabled && <button
            className="button-X"
            onClick={() => {
              props.onRemove(props.id);
            }}
          >
            X
          </button>}
        </td>
    </tr>
  );
});

interface ISortableListProps {
  disabledLabels?: string[];
  list: Field[];
  showSize: boolean;
  onRemove: (index: number) => void;
}

interface ISortableItemProps {
  disabled:boolean|undefined;
  field: Field;
  id: number;
  showSize: boolean;
  onRemove: (id: number) => void;
}

export interface ArrayMoveProps {
  newIndex: number;
  oldIndex: number;
}

export { SortableFieldsList };

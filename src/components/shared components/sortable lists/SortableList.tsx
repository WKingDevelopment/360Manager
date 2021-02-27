import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { removeFromArrayByIndex } from '../../../functions/array_Functions';

const SortableList = React.memo(SortableContainer((props:ISortableListProps) => {
    let key: number = -1
    const onRemove = (id:number):void => {
      props.onRemove(removeFromArrayByIndex(id,props.list))
    }

    return (
      <ul>
        {props.list.map((label) => {
          const disabled = props.disabledList && props.disabledList.includes(label);
          key += 1;
         return (
            <SortableItem key={key} index={key} id={key} onRemove={onRemove} label={label} disabled={disabled} showRemove={!disabled}/>
        )})}
      </ul>
    );
  }));

  const SortableItem = SortableElement((props:ISortableItemProps) => {
    return (
      <div className="cont-horiz sb grabbing">
          <p className="noselect">{props.label}</p>
          {props.showRemove && <button className="button-X noselect" onClick={() => {props.onRemove(props.id)}}>X</button>}
      </div>
    )});

interface ISortableListProps {
    list:string[],
    disabledList?: string[],
    onRemove: (result:string[]) => void
}

interface ISortableItemProps {
    label: string,
    showRemove: boolean,
    id: number,
    onRemove: (id:number) => void
}

export interface ArrayMoveProps {
  newIndex: number;
  oldIndex: number;
}

  export { SortableList }
import React from 'react';
import * as _ from "lodash";
function SortObject() {
    const list = [
        { 'id': 4, 'name': 'abc' },
        { 'id': 10, 'name': 'ab2' },
        { 'id': 5, 'name': 'abc3' },
        { 'id': 6, 'name': 'abc5' }
    ]
    let sorted_list = _.sortBy(list, 'id');


    return (
        <div>
            <h3>Sort an Object </h3>
            <ul>
                {sorted_list.map((e) => <li>{e.id} {e.name}</li>)}
            </ul>
        </div>
    );
}

export default SortObject;
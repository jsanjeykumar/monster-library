import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.components'
//props always there
//children is anything inbetween in tags <>children</>
export const CardList = (props)=>
{
return <div className='card-list'>
    {
   props.monsters.map(monster=> <Card key = {monster.id} monster = {monster}/>)
    }
    </div>
};
import React from 'react';

const Items = ({ item, pic, price }) => {
    return (
        <div id="items" className="col-md-4 text-center py-4">
            <img className="w-50" src={require(`../../Image/Menu/${pic}`)} alt="" />
            <p>{item}</p>
            <h5 className="text-danger">${price}</h5>
        </div>
    );
};

export default Items;
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import {connect} from 'react-redux';
CounterFeature.propTypes={

};
function CounterFeature(props){
console.log(props.data);
const handlexoa = (value) => {
    props.deleteUserRedux(value)
}
console.log(props.data);
const handlethem = (hau) => {
    console.log(hau);
    props.addUserRedux({id: 2, name: 'aaa'});
}
    return(
        <div>
            {props.data.length > 0 ?
            props.data.map((aaa)=>(
                <p>{aaa.id} - {aaa.name}--
                 <button value={aaa.id} onClick={(e)=>handlexoa(aaa)}>xóa</button>
                 </p> 
            ))
            :<span></span>}
        <button  onClick={handlethem}>thêm</button>

        </div>
    );
}
const mapStateToProps = (state) => {
 return { 
     data: state.users 
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserRedux: (userDelete) =>  dispatch({type: 'DELETE_USER',payload: userDelete}),
        addUserRedux: (hauu) =>  dispatch({type: 'CREATE_USER',payload: hauu}),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterFeature);
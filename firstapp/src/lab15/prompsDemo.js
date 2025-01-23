import React from "react";

function ChildComponent(props){
    return <h1>{props.message}</h1>;
}
function ParentComponent(){
    return <ChildComponent message = "Hello, this is passed via props."/>
}
export default ParentComponent;
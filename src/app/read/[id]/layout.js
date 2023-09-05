export default function Layout(props) {
    let msg = null;
    if (props.params.id==='1' ) {
        msg = "HTML 선택";
    } else if (props.params.id==='2' ){
        msg = "CSS 선택"
    }else if (props.params.id==='3' ){
        msg = "JavaScript 선택"
    }
    return(
        <>
          {props.children}
          <h3>paramters : {props.params.id }</h3> 
          <h3>{msg}</h3> 
          <h3>paramters : {props.params.id === '1' ? "HTML선택" : props.params.id === '2'? "CSS선택" : "JS선택" }</h3> 
        </>
    );
}
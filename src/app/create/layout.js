import './create.css'

// 반드시 props를 인자로 받아야 한다.
export default function Layout(props) {
    return(
        <form>
            <h2>Create-layout</h2>
            {/* create안에 있는 page.js를 표현하자. */}
            {props.children}
        </form>
    );
}
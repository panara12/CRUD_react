import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="bg-gray-500">
            <Link to='./'>Home</Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link to='./Alldetails'>All details</Link>&nbsp;
            &nbsp;
            &nbsp;
            <Link to='./Newadd'>New add</Link>&nbsp;
            &nbsp;
            &nbsp;
            </div>
        </>
    );
}

export default Header
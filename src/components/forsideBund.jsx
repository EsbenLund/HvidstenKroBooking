import footer from "../assets/footersten.png";
export default function ForsideBund() {
const footerForside = {
    position:'relative',
    bottom:'0',
    width:'100%',

    
}
const footImg = {
    width:'100%',
}
    return (
        <footer style={footerForside}>
            <img style={footImg} src={footer} alt="hvidsten"></img>
        </footer>
    )
}
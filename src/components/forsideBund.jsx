import bundbanner from "../assets/bundbanner.png"
export default function ForsideBund() {
const footerForside = {
    position:'fixed',
    bottom:'0',
}
    return (
        <footer style={footerForside}>
            <img src={bundbanner}></img>
        </footer>
    )
}
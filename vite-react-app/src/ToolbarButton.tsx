







export default function ToolbarButton() {
    
    const clickOnButton = () => {
        alert("Time to click")
    }
    return <div>
        <button className="w-100" onClick={clickOnButton}>Button</button>

    </div>
}
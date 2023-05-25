import './modal.css'

export const PrimaryModal = () => {
    const viewOnClick = () => {
        const popup = document.getElementById("popup")
        popup.classList.toggle("show");
    }
    const closeOnclick = () => {
        const mod = document.getElementById("mod")
        mod.classList.toggle("hiddenjon")
    }

    const copyOnclick = () => {
        const field = popup.getElementById("field")
        const input = field.getElementById("input")
        const copy = field.getElementById("button");
        input.select(); //select input value
        if (document.execCommand("copy")) { //if the selected text copy
            field.classList.add("active");
            copy.innerText = "Copied";
            setTimeout(() => {
                window.getSelection().removeAllRanges(); //remove selection from document
                field.classList.remove("active");
                copy.innerText = "Copy";
            }, 3000);
        }
    }

    return (
        <div className={"w-100 mod"} id={"mod"}>
            {/*<button onClick={() => viewOnClick()} id="view-modal">View Modal</button>*/}
            <div id="popup" className={"popup show"}>
                <header>
                    <span>E'lon</span>
                </header>
                <div className="content">
                    <p>e'lon</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur dicta distinctio
                        dolore doloremque dolores eius enim error expedita fugit nostrum, nulla officia pariatur quis
                        quo sit tempore voluptate voluptatum.</p>
                </div>
                <div className={"closejon"}>
                    <div id="close" className={"closes"} onClick={() => closeOnclick()}>
                        <i className="uil uil-times" style={{fontSize: '28px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
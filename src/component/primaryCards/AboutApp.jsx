import './primaryCards.css'

export const AboutApp = ({aboutApp, lan}) => {
    return (
        <div className={"a bg-light p-2"}>
            <div className="col">
                {lan === "ENG" ? aboutApp.enAbout : aboutApp.ruAbout}
            </div>
            <br/><br/>
            <br/><br/>
        </div>
    )
}
import './primaryCards.css'

export const AboutApp = ({aboutApp, lan}) => {
    return (
        <div className={"a bg-light p-2"}>
            <div className="col">
                {aboutApp.uzAbout}
            </div>
            <hr/>
            <div className="mt-4 row">
                <div className="col">
                    <div>
                        <span className={"text-primary"}
                              style={{fontSize: '22px'}}>{aboutApp.dayAppLaunched}</span>{lan === "ENG" ? 'Day' : "День"}
                    </div>
                    <h6>
                        {lan === "ENG" ? "The day the program worked" : "День, когда программа работала"}
                    </h6>
                </div>
                <div className="col">
                    <div>
                        <span className={"text-primary"} style={{fontSize: '22px'}}>{aboutApp.howMuchMoneyApp}</span>USDT
                    </div>
                    <h6>
                        {lan === "ENG" ? "Money withdrawn from this program" : "Деньги выведены из этой программы"}
                    </h6>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}
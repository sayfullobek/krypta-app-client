import {PrimaryCards} from "../../component/primaryCards/PrimaryCards";
import {CoinsList} from "../../component/primaryCards/CoinsList";
import {AboutApp} from "../../component/primaryCards/AboutApp";

export const UserPanel = () => {
    const globe1 = "https://media.sketchfab.com/models/cb636fdd7f124125a3b7d194da9942e1/thumbnails/3acf153eed654d31932803efcf37ea34/05fb0bf23df844bebb8710f1814bde20.jpeg"
    const globe2 = "https://github.blog/wp-content/uploads/2020/12/102573561-8e872300-40a3-11eb-9feb-b480aeae0564.png?resize=1024%2C513"

    return (
        <div className={"p-2"}>
            <div className="card text-bg-dark">
                <img src={globe1} className="card-img" alt="1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">METAGO Staking hovuzi</h5>
                    <p className="card-text">Staking osonroq</p>
                    <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa qiling okalar</small>
                    </p>
                </div>
            </div>
            <br/>
            <p className={"text-center bg-light"}>salom qozi</p>
            <div className="card text-bg-dark">
                <img src={globe2} className="card-img" alt="1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">METAGO Staking hovuzi</h5>
                    <p className="card-text">Staking osonroq</p>
                    <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa qiling okalar</small>
                    </p>
                </div>
            </div>
            <br/>
            <PrimaryCards/>
            <CoinsList status={"panel"}/>
            <AboutApp/>
        </div>
    )
}
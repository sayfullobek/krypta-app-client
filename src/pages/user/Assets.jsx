import {Register} from "../auth/Register";
import {CoinsList} from "../../component/primaryCards/CoinsList";

export const Assets = () => {
    const token = localStorage.getItem("token")
    const arr = [
        {name: 'My total assets USDT', size: 8},
        {name: 'My total assets USDT', size: 0},
        {name: 'My total assets USDT', size: 0},
        {name: 'My total assets USDT', size: 0},
        {name: 'My total assets USDT', size: 0},
        {name: 'My total assets USDT', size: 0},
    ]
    return (
        <div>
            {token ? (
                <div className={"w-100"}>
                    <div className={"w-100 p-2"} style={{backgroundColor: 'white'}}>
                        <div className={"w-100 text-center fw-bold"} style={{fontSize: '30px'}}>
                            8
                            <div className={"mt-2 text-primary"}>
                                My total assets USDT
                            </div>
                        </div>
                        <div className="row mt-3">
                            {arr.map(item => (
                                <div className={"w-50 text-center"} style={{fontSize: '20px'}}>
                                    <span className={"fw-bold"}>{item.size}</span>
                                    <div className={"mt-2 text-secondary"}>
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"w-100 mt-3 p-2"} style={{backgroundColor: 'white'}}>
                        <p className={"fw-bold text-dark"}>avialable assets</p>
                        <div className="row">
                            <CoinsList status={"assets"}/>
                        </div>
                    </div>
                </div>
            ) : (
                <Register/>
            )}
        </div>
    )
}
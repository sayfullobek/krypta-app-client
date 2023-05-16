import WheelComponent from "react-wheel-of-prizes";

export const Gildirak = () => {
    const segments = [
        'Mers',
        'Qozi',
        '10$',
        'Asl',
        '2ta asl',
        '3 ta asl va 1ta qoy',
        '5%',
        '2ta qoy'
    ]
    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000'
    ]
    const onFinished = (winner) => {
        console.log(winner)
    }
    return (
        <div style={{width: '94%', height: '100vh', display: "flex"}} className={"gildirak"}>
            <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment='won 10'
                onFinished={(winner) => onFinished(winner)}
                primaryColor='black'
                contrastColor='white'
                buttonText='Spin'
                isOnlyOnce={false}
                size={290}
                upDuration={300}
                downDuration={1000}
                fontFamily='Arial'
            />
        </div>
    )
}
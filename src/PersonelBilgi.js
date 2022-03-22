import Bilgi from "./Bilgi";
import "./PersonelBilgi.css";

function PersonelBilgi(props) {
    return (
        <div className="tasarim">
            <div className="panel">
                <img src={"https://cdn.create.vista.com/api/media/small/134255626/stock-vector-avatar-male-profile-gray-person"} 
                alt="resim"> 
                </img>
                <Bilgi
                    title={props.items[0].title}
                    explanation={props.items[0].explanation}
                />
                <Bilgi
                    title={props.items[1].title}
                    explanation={props.items[1].explanation}
                />
                <Bilgi
                    title={props.items[2].title}
                    explanation={props.items[2].explanation}
                />
                <Bilgi
                    title={props.items[3].title}
                    explanation={props.items[3].explanation}
                />
                <Bilgi
                    title={props.items[4].title}
                    explanation={props.items[4].explanation}
                />
                <Bilgi
                    title={props.items[5].title}
                    explanation={props.items[5].explanation}
                />
            </div>
            <div className="panel"> <Bilgi
                title={props.items[6].title}
                explanation={props.items[6].explanation}
            />
                <Bilgi
                    title={props.items[7].title}
                    explanation={props.items[7].explanation}
                />
                <Bilgi
                    title={props.items[8].title}
                    explanation={props.items[8].explanation}
                />
                <Bilgi
                    title={props.items[9].title}
                    explanation={props.items[9].explanation}
                />

            </div>
        </div>
    )
}
export default PersonelBilgi;
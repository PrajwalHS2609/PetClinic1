import HomeServiceHead from "./HomeServiceHead";
import HomeServiceMain from "./HomeServiceMain";

export default function HomeService(){
    return(
        <div className="component-container">
            <HomeServiceHead/>
            <HomeServiceMain/>
        </div>
    )
}
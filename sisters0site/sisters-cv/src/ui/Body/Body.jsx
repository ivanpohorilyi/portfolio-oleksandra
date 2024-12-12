import './Body.sass';
import Portfolio from '../Portfolio/Portfolio';
import Summary from '../Summary/Summary';

const Body = () => {
    return (
        <div className="body-container">
            <Summary />
            <Portfolio />
        </div>
    ) 
}

export default Body;
import { useNavigate } from "react-router-dom";

const BackButton = ({mode}:{mode:string}) => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="fixed top-0 left-0 p-2 m-4   rounded-md">
            <button onClick={handleBack} className={`text-${mode==='light'?'black':'white'} hover:underline`}>
                back
            </button>
        </div>
    );
};

export default BackButton;
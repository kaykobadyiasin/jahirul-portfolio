import { useParams } from "react-router-dom";
import Button from "../../../../Components/Button/Button";

const OrderSuccess = () => {
    const { tranId } = useParams()
    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-5">
            <div className="">
                <div className="flex justify-center">
                    <Button btnValue={'Go Back To Home'} link={'#books'} color={'hover:text-primaryColor-200 text-primaryColor-100'}/>
                </div>
                <h1 className="text-4xl my-8 font-semibold bg-secondaryColor-100 text-white p-5 rounded-md">✔ Order Success</h1>
                <p className="font-semibold"><span className="bg-secondaryColor-100 p-2 text-white rounded-md">Tranjection ID:</span> {tranId}</p>
            </div>
        </div>
    );
};

export default OrderSuccess;
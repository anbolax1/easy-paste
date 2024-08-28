import DataGrid from "../components/DataGrid";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../contexts/AuthContext";

const MyPastes = () => {
    const { token } = useAuth();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            let headers = {};
            if (token) {
                headers = {
                    'Authorization': `Bearer ${token}`
                };
            }
            try {

                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/pastes`, {headers:headers});
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <div className="App">
            <DataGrid
                data={data}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageClick}
            />
        </div>
    );
};

export default MyPastes;


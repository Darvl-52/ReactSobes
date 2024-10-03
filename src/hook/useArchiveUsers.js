import {useSelector} from "react-redux";

export const useArchiveUsers = () => {
    return useSelector(state => state.archiveUser)
}
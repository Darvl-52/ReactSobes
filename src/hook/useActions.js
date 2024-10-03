import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/archive/archive.slice";

const rootActions = {
    ...actions
}

export const UseActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch),[dispatch])
}
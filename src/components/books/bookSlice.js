import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../apiService";
import { fetchBooks } from "./bookAPI";
import {react} from "react-toastify";

const initialState ={
    books:[],
    readingList:[],
    bookDetail: null,
    status: null,
};
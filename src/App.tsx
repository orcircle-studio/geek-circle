import * as React from 'react';
import {useEffect} from 'react';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {CalendarMonth, Home} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import {Route, Routes, useHref, useNavigate} from "react-router-dom";
import HomePage from "./pages/Home"
import NotFound from './pages/NotFound';
import {Calendar} from "antd-mobile";
const nav = ["./home", "./mine"]
export default function TabsVariants() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);
    const navigateFunction = useNavigate();
    useEffect(() => {
      try {
          navigateFunction(nav[value])
      }catch (e){
          navigateFunction("404")
      }
    }, [value])
    return (
        <Box sx={{pb: 7}} ref={ref}>
            <CssBaseline/>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="主页" icon={<Home/>}/>
                    <BottomNavigationAction label="日历" icon={<CalendarMonth/>}/>
                    <BottomNavigationAction label="收藏" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="我的" icon={<PersonIcon/>}/>
                </BottomNavigation>
            </Paper>
            <Routes>
                <Route element={<HomePage></HomePage>} path={'/home'}/>
                <Route element={<HomePage></HomePage>} path={'/mine'}/>
                <Route path={"/*"} element={<NotFound/>}/>
            </Routes>
        </Box>
    );
}

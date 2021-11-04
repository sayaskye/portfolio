import { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from "react-intl"
import { useContext } from "react";
import { configContext } from '../../context/configContext' 

const tecnologie = ({name, svgname, idtext}) => {
    
    const {theme} = useContext(configContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-s' : undefined;

    return ( 
        <>
                <div className="flex flex-col items-center justify-center my-2">
                    <img className="m-3 h-[80px] w-[80px] md:h-[110px] md:w-[110px] lg:h-[140px] lg:w-[140px]" src={`/tecnologies/${svgname}.svg`} alt="Technologie" loading="lazy" />
                    <p className="mx-auto dark:text-white text-black font-bold text-base lg:text-xl popovers duration-300 ease-in">{name}</p>
                </div>
        {/* <Button onClick={handleClick}>
                <div className="flex flex-col items-center justify-center">
                    <img className="m-3 h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px]" src={`/tecnologies/${svgname}.svg`} alt="Technologie" loading="lazy" />
                    <p className="mx-auto dark:text-white text-black font-bold text-base lg:text-xl popovers">{name}</p>
                </div>
            </Button> 
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
                className={`${theme}` }
            >
                <Typography className="w-full md:w-[300px] dark:bg-black bg-white"> 
                    <div className="bg-gray-300 dark:bg-gray-700">
                        <div className="p-3 dark:text-white text-black popovers">
                            <span className="">
                                <FormattedMessage id={"about.popover."+name} defaultMessage={name}/>
                            </span>
                        </div>
                    </div>
                </Typography>
            </Popover> 
        */}
        </>
    );
}
 
export default tecnologie;
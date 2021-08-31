import { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from "react-intl"

const tecnologie = ({name, svgname, idtext}) => {

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
            <Button onClick={handleClick}>
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
            >
                <Typography> 
                    <div className="m-3">
                        <span className="">
                            <FormattedMessage id={"about.popover."+name} defaultMessage={name}/>
                        </span>
                    </div>
                </Typography>
            </Popover>
        </>
    );
}
 
export default tecnologie;
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
        {
        to, 
        href, 
        primary = false, 
        outline = false, 
        small = false, 
        large = false , 
        text = false, 
        rounded = false, 
        disabled = false, 
        children,
        className, 
        onClick, 
        ...passProps
    }) {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if(disabled){
        delete props.onClick;
    }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        className
    })
    return ( 
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
     );
}

export default Button;
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loadingio-spinner-eclipse-77fg5hkelmm', {}, [className])}>
        <div className="ldio-t2p26zuyids">
            <div />
        </div>
    </div>
);

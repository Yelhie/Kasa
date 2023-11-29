import './error.scss';

export default function ErrorPage() {
    return (
        <div className="errorContainer">
            <p className="errorNumber">404</p>
            <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
}
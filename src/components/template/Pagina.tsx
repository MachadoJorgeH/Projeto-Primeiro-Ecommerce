import Cabecalho from './Cabecalho';

export interface PaginaProps {
    children: React.ReactNode;
    className?: string;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-green-500">
            <Cabecalho />
            <main
                className={`
                    flex-1 w-full max-w-[1200px] mx-auto
                    ${props.className ?? ''} py-10
                    px-4 sm:px-6 md:px-8
                `}
            >
                {props.children}
            </main>
        </div>
    );
}

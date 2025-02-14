import ItemCarrinho from '@/data/model/ItemCarrinho'
import { IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import Image from 'next/image'

export interface AreaItemCarrinhoProps {
    item: ItemCarrinho
    adicionar?: (item: ItemCarrinho) => void
    remover?: (item: ItemCarrinho) => void
}

export default function AreaItemCarrinho(props: AreaItemCarrinhoProps) {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-teal-950 rounded-md overflow-hidden p-4">
        {/* Imagem do produto */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <Image
            src={props.item.produto.imagem}
            alt={props.item.produto.nome}
            fill
            className="object-cover"
          />
        </div>
  
        {/* Informações do produto */}
        <div className="flex flex-col justify-center flex-1 text-center sm:text-left">
          <span className="text-lg sm:text-xl font-bold">{props.item.produto.nome}</span>
          <span className="text-xs sm:text-sm text-zinc-100">{props.item.produto.descricao}</span>
          <div className="flex justify-center sm:justify-start items-center gap-2 mt-2 text-zinc-200 text-lg font-bold">
            <span>R$ {props.item.produto.preco.toFixed(2)}</span>
            <IconX size={20} />
            <span>{props.item.quantidade}</span>
            <span>=</span>
            <span className="text-yellow-500">
              R$ {(props.item.produto.preco * props.item.quantidade).toFixed(2)}
            </span>
          </div>
        </div>
  
        {/* Controle de quantidade */}
        <div className="flex gap-2 items-center px-4 sm:px-5">
          <button onClick={() => props.remover?.(props.item)}>
            <IconMinus />
          </button>
          <span className="flex px-4 py-2 rounded-md bg-black">{props.item.quantidade}</span>
          <button onClick={() => props.adicionar?.(props.item)}>
            <IconPlus />
          </button>
        </div>
      </div>
    );
  }
  

"use client";

import { useState } from 'react';
import { Product } from '@/types';
import Image from 'next/image';
import IconButton from './icon-button';
import { Expand } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

import usePreviewModal from '@/hooks/use-preview-modal';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className={`bg-white group cursor-pointer rounded-xl border p-3 space-y-4 ${hovered ? 'skew-y-3' : ''}`}
    >
      {/* Images and actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image src={data?.images?.[0]?.url} fill alt="image" className="aspect-square object-cover rounded-md" />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600"/>} />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
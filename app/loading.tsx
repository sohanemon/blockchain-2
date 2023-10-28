import { Iconify } from '@sohanemon/utils/components';

export default function Loading() {
  return (
    <div className="grid min-h-screen place-content-center text-3xl">
      <Iconify className="text-4xl" icon={'svg-spinners:blocks-shuffle-3'} />
      loading
    </div>
  );
}

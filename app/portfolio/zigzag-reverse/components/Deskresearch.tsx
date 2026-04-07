'use client';

import LegacyDeskresearch from '../../../../src/component/Deskresearch';

type Props = {
  vector22: string;
};

export default function Deskresearch(props: Props) {
  return <LegacyDeskresearch vector22={props.vector22} />;
}

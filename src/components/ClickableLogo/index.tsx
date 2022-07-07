import { FC } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';

interface Props {
  sx: SxProps<Theme>;
  width?: number;
  height?: number;
}

const ClickableLogo: FC<Props> = ({ sx, width = 110, height = 60 }) => {
  return (
    <Box sx={sx}>
      <Link href={'/'} passHref={true}>
        <a>
          <Image alt={'logo'} src={'/resources/svgs/zemoto_refactored.svg'} width={width} height={height} />
        </a>
      </Link>
    </Box>
  );
};

export default ClickableLogo;

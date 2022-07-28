import { FC, useEffect, useState } from 'react';
import { Button, Divider, Drawer, IconButton, Stack, Switch, Typography } from '@mui/material';
import Cookies from 'universal-cookie';
import { ArrowBack } from '@mui/icons-material';
import { Box } from '@mui/system';
import { config } from '@src/config';

const cookies = new Cookies();
const { gaTrackingId } = config;

const CookieBanner: FC = () => {
  const [open, setOpen] = useState(!cookies.get('cookie-consent'));
  const [slide, setSlide] = useState(0);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  // const handleAddAnalyticsCookies = () => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   import('react-ga')
  //     .then((x) => x.default)
  //     .then((ReactGA) => {
  //       // const trackers = [
  //       //   {
  //       //     trackingId: gaTrackingId,
  //       //     gaOptions: { name: 'ua' }
  //       //   }
  //       //   // },
  //       //   // {
  //       //   //   trackingId: 'G-WDQ3ZS1QE9',
  //       //   //   gaOptions: { name: 'ga' }
  //       //   // }
  //       // ];
  //       ReactGA.initialize(gaTrackingId);
  //       ReactGA.pageview(window.location.pathname + window.location.search);
  //       // ReactGA.pageview(window.location.pathname + window.location.search, ['ua']); //, 'ga']);
  //       //
  //       // Router.events.on('routeChangeComplete', () => {
  //       //   ReactGA.pageview(window.location.pathname + window.location.search, ['ua']); //, 'ga']);
  //       // });
  //     });
  // };

  const handleRemoveAnalyticsCookies = () => {
    cookies.remove('_ga');
    cookies.remove('_gid');
    cookies.remove(`_gat_gtag_${gaTrackingId}`);
    cookies.remove('_gat_ua');
    cookies.remove('_gat');

    // Could be for GA4
    // cookies.remove('_ga_WDQ3ZS1QE9');
    // cookies.remove('_ga_WDQ3ZS1QE9');
  };

  useEffect(() => {
    if (cookies.get('cookie-consent') === 'true') {
      // handleAddAnalyticsCookies();
    }
    if (!cookies.get('cookie-consent') || cookies.get('cookie-consent') === 'false') {
      handleRemoveAnalyticsCookies();
    }
  }, []);

  const handleAccept = () => {
    cookies.set('cookie-consent', true, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: '/'
    });
    // handleAddAnalyticsCookies();
    setOpen(false);
  };

  const handleReject = () => {
    cookies.set('cookie-consent', false, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: '/'
    });
    handleRemoveAnalyticsCookies();
    setOpen(false);
  };

  const handleSaveCookieSettings = () => {
    if (analyticsEnabled) {
      handleAccept();
    } else {
      handleReject();
    }
  };

  return (
    <Drawer
      open={open}
      anchor={'bottom'}
      disableEscapeKeyDown
      PaperProps={{
        sx: {
          margin: [0, 4],
          py: 3,
          width: ['auto', '420px'],
          left: 'auto',
          right: 0
        }
      }}
    >
      <Stack spacing={2}>
        {slide === 0 && (
          <>
            <Stack sx={{ px: 3 }} spacing={2}>
              <Typography variant='h6'>Cookie settings</Typography>
              <Typography color='text.secondary'>
                We use cookies to give you the best experience. By continuing, you agree to our use of cookies
              </Typography>
            </Stack>

            <Divider />

            <Stack direction={['column', 'row']} gap={2} px={3}>
              <Button variant={'contained'} size={'large'} onClick={handleAccept}>
                Accept all
              </Button>
              <Button variant={'contained'} size={'large'} onClick={() => setSlide(1)}>
                Cookie settings
              </Button>
            </Stack>
          </>
        )}
        {slide === 1 && (
          <>
            <Stack direction='row' alignItems='center' px={2} spacing={0.5}>
              <IconButton onClick={() => setSlide(0)} size='small'>
                <ArrowBack />
              </IconButton>
              <Typography variant='h6'>Cookie preferences</Typography>
            </Stack>
            <Stack sx={{ px: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center '
                }}
              >
                <Typography>Essential cookies</Typography>
                <Switch checked={true} disabled={true} />
              </Box>
              <Typography color='text.secondary' fontSize={14}>
                Cookies required to enable basic website functionality. They cannot be disabled.
              </Typography>
            </Stack>
            <Stack sx={{ px: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center '
                }}
              >
                <Typography>Analytics</Typography>
                <Switch
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </Box>
              <Typography color='text.secondary' fontSize={14}>
                Cookies helping understand how this website performs, how visitors interact with the site, and whether
                there may be technical issues.
              </Typography>
            </Stack>
            <Divider />
            <Stack direction='row' spacing={2} px={3}>
              <Button variant='contained' size='large' fullWidth onClick={handleSaveCookieSettings}>
                Save cookie settings
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Drawer>
  );
};

export default CookieBanner;

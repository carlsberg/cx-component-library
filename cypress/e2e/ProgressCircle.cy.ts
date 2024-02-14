import { buildSnapshotName, visit } from 'cypress/support/utils';

const dataTestId = 'progress-circle';

// TODO: this should come from malty
export enum ForegroundCircleColor {
  Close = 'close',
  DigitalBlack = 'digital-black',
  Hold = 'hold',
  Live = 'live',
  Multiple = 'multiple',
  Notification = 'notification',
  Parked = 'parked',
  Support80 = 'support80',
  Support100 = 'support100',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  Update = 'update'
}

describe('<ProgressCircle />', () => {
  it('Base', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base'
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - 100%', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { percentage: '100' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it.each(Object.keys(ForegroundCircleColor))('Base - Color - %s', (foregroundColor) => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { foregroundColor }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });

  it('Base - Without percentage', () => {
    const page = visit({
      dataTestId,
      storyId: 'progress-indicators-progress-circle--base',
      args: { displayPercentage: 'false' }
    });

    page.getByTestId(dataTestId).compareSnapshot(buildSnapshotName());
  });
});

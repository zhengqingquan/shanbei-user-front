import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  // 界面左上角的文字
  title: '「白日梦橙 梦境花开」',
  pwa: false,
  // 界面左上角的logo
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  logo: 'https://avatars.githubusercontent.com/u/55186872?v=4',
  iconfontUrl: '',
};

export default Settings;

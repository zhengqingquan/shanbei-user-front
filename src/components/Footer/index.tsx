import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from "react";

const Footer: React.FC = () => {

  const defaultMessage = '扇贝制造，必属劣品';

  // 获取当前年份
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'shanbei-user-front',
          title: 'shanbei-user-front',
          href: 'https://github.com/zhengqingquan/shanbei-user-front',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/zhengqingquan',
          blankTarget: true,
        },
        {
          key: 'shanbei-user',
          title: 'shanbei-user',
          href: 'https://github.com/zhengqingquan/shanbei-user',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

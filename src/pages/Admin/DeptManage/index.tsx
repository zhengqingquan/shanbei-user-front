import {PageContainer} from '@ant-design/pro-components';
import {Alert, Card, Typography} from 'antd';
import React from 'react';
import styles from './index.less';
import {Link} from "umi";

const CodePreview: React.FC = ({children}) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const DeptManage: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'使用Ant Design Pro'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-components</CodePreview>
        <CodePreview>
          <Link to={''}>新用户</Link>
        </CodePreview>
      </Card>
    </PageContainer>
  );
};
export default DeptManage;

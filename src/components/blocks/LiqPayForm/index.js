import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { LiqPayPay, LiqPaySubscribe } from "react-liqpay";
import { Button, Form, Tabs, InputNumber } from 'antd'
import { CopyOutlined, CheckOutlined } from '@ant-design/icons'
import PrivatBankQRImg from '../../../assets/img/pb-qr.png';
import LiqPayImg from '../../../assets/img/liqpay.png';
import router from 'umi/router'
import styles from './index.less'

const langCollection = {
  UA: {
    lqpSbmtBtn: 'Сплатити'
  },
  EN: {
    lqpSbmtBtn: 'Pay'
  },
};

// const prefixFormItem = ({ name, currency, disabled }) => {
//   return (
//     <FormItem
//       className={styles.prefixFormItem}
//       label={false}
//       name={name}
//       initialValue={0}
//       // rules={[{ required: true }]}
//     >
//       <InputNumber
//         min={0}
//         // max={100}
//         step={0.01}
//         addonAfter={(<span className={styles.formItemSuffix}>{currency}</span>)}
//         disabled={disabled}
//       />
//     </FormItem>
//   )
// }

// {/* <FormItem
//   label="Cost"
//   name={['marketplaceBasePricingTemplate', 'json_data', objectKey, 'costPercentValue']}
//   initialValue={0}
// >
//   <InputNumber
//     addonBefore={prefixFormItem({ name: ['marketplaceBasePricingTemplate', 'json_data', objectKey, 'costFixedValue'], currency: currency || null, disabled: disabled=(disabled || false) })}
//     // addonAfter={suffixFormItem({ name: ['marketplaceBasePricingTemplate', 'json_data', objectKey, 'costType'], currency: currency, disabled: disabled=(disabled || false) })}
//     addonAfter={(<span className={styles.formItemSuffix}>%</span>)}
//     min={0}
//     max={100}
//     step={0.01}
//     disabled={disabled || false}
//   />
// </FormItem> */}

const LiqPayForm = ({
  isMobile,
  lang,
  product
}) => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [payPeriod, setPayPeriod] = useState('oneTime')
  const [amount, setAmount] = useState(0)

  const onChangePayPeriod = (key) => {
    console.log('onChangePayPeriod', key);
    setPayPeriod(key)
  }

  const onChangeAmount = (val) => {
    console.log('onChangeAmount', val);
    setAmount(val)
  }

  const items = [
    {
      key: 'oneTime',
      label: 'Разовий внесок',
      // children: 'Content of Tab Pane 1',
    },
    {
      key: 'subscription',
      label: 'Підписка',
      // children: 'Content of Tab Pane 2',
    }
  ]

  const ButtonComponent = () => (
    <div className={styles.liqPayFormSubmitWrap}>
      <button className={styles.liqPayFormSubmit}>
        {langCollection[`${lang}`].lqpSbmtBtn}
      </button>
    </div>
  )

  return (
    <div className={styles.liqPayForm}>
      <div className={styles.liqPayFormHeader}>
        <div className={styles.liqPayFormHeaderImgWrap}>
          <img
            alt='LiqPay'
            src={LiqPayImg}
            style={{ width: '100%' }}
            className={styles.liqPayFormHeaderImgWrap}
          />
        </div>
      </div>
      <Tabs
        items={items}
        activeKey={payPeriod}
        defaultActiveKey={payPeriod}
        className={styles.liqPayFormPaymentPeriod}
        onChange={onChangePayPeriod}
      />
      <InputNumber
        min={0}
        step={1}
        value={amount}
        onChange={onChangeAmount}
        className={styles.liqPayFormAmount}
        addonAfter={(<span className={styles.liqPayFormAmountSuffix}>UAH</span>)}
      />
      <div className={styles.liqPayFormAmountQuickSelection}>
        <Button className={styles.liqPayFormAmountQuickSelectionBtn} onClick={() => onChangeAmount(100)}>
          <strong>{`+ 100`}</strong><span>{` UAH`}</span>
        </Button>
        <Button className={styles.liqPayFormAmountQuickSelectionBtn} onClick={() => onChangeAmount(500)}>
          <strong>{`+ 500`}</strong><span>{` UAH`}</span>
        </Button>
        <Button className={styles.liqPayFormAmountQuickSelectionBtn} onClick={() => onChangeAmount(1000)}>
          <strong>{`+ 1000`}</strong><span>{` UAH`}</span>
        </Button>
      </div>
      {
        payPeriod === 'subscription'
          ? <LiqPaySubscribe
            publicKey={process.env.CONFIG.lqpPubKey}
            privateKey={process.env.CONFIG.lqpPrvtKey}
            description="Payment for product"
            orderId={Math.floor(1 + Math.random() * 900000000)}
            result_url={process.env.CONFIG.lqpResultUrl}
            server_url={process.env.CONFIG.lqpServerUrl}
            product_description={product || "Donate"}
            amount={amount}
            extra={[
              <ButtonComponent key='1' />
            ]}
          />
          : <LiqPayPay
            publicKey={process.env.CONFIG.lqpPubKey}
            privateKey={process.env.CONFIG.lqpPrvtKey}
            description="Payment for product"
            orderId={Math.floor(1 + Math.random() * 900000000)}
            result_url={process.env.CONFIG.lqpResultUrl}
            server_url={process.env.CONFIG.lqpServerUrl}
            product_description={product || "Donate"}
            amount={amount}
            extra={[
              <ButtonComponent key='1' />
            ]}
          />
      }
    </div>
  );
};

LiqPayForm.propTypes = {
  isMobile: PropTypes.bool,
  lang: PropTypes.string,
};

const mapStateToProps = (state) => ({
  // lang: state.application.lang,
  isMobile:  state.application.isMobile
})

export default connect(mapStateToProps, null)(LiqPayForm)

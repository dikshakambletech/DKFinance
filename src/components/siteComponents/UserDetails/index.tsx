// INTERFACES
import { IUserDetails } from './UserDetailsInterfaces';
// STYLES
import { Form, Input, InputNumber, Select } from 'antd';
import {
  AntdFormButton,
  AntdFormFields,
} from 'components/antdComponents/UpdateAntdForm/components/AntdFormComponents';
import { requiredRule } from 'pages/authenticatedPages/UpdateInvestment/components/UpdateInvestmentFormComponents';
import './UserDetails.scss';

const UserDetails = ({ user, profile }: IUserDetails) => {
  const { totalInvestmentValue, stocks, cryptos } = profile;

  const largestStockHold = stocks ? stocks?.highestInvestmentStock : 'N/A';
  const largestCryptoHold = cryptos ? cryptos?.highestInvestedCurrency : 'N/A';

  // fields to be shown in user info form // todo: move to separate files later
  const formUserFielsData = [
    {
      name: 'firstName',
      rules: requiredRule('Please input First Name'),
      content: <Input placeholder='Please enter First Name' defaultValue={user.given_name} />,
    },
    {
      name: 'lastName',
      rules: requiredRule('Please input Last Name'),
      content: <Input placeholder='Please enter Last Name' defaultValue={user.family_name} />,
    },
    {
      name: 'emailId',
      rules: requiredRule('Please input Email Id'),
      content: <Input placeholder='Please enter Email Id' defaultValue={user.email} readOnly />,
    },
    // {
    //   name: 'nickName',
    //   rules: requiredRule('Please input Nick Name'),
    //   content: <Input placeholder='Please enter Nick Name' />,
    // },
    {
      name: 'gender',
      rules: requiredRule('Please select Gender'),
      content: (
        <Select placeholder='Select Gender'>
          <Select.Option value='male'>Male</Select.Option>
          <Select.Option value='female'>Female</Select.Option>
          <Select.Option value='others'>Others</Select.Option>
        </Select>
      ),
    },
    {
      name: 'address',
      rules: requiredRule('Please input Address'),
      content: <Input placeholder='Please enter Address' />,
    },
    {
      name: 'mobileNumber',
      rules: requiredRule('Please input Mobile Number'),
      content: <InputNumber placeholder='Please enter Mobile Number' />,
    },
    {
      name: 'bankAccountNumber',
      rules: requiredRule('Please input Bank Account Number'),
      content: <InputNumber placeholder='Please enter Bank Account Number' />,
    },
    {
      name: 'bankIfscCode',
      rules: requiredRule('Please input Bank IFSC'),
      content: <InputNumber placeholder='Please enter Bank IFSC' />,
    },
    {
      name: 'pan',
      rules: requiredRule('Please input PAN'),
      content: <Input placeholder='Please enter PAN' />,
    },
    // {
    //   name: 'aadharNumber',
    //   rules: requiredRule('Please input Aadhar Number'),
    //   content: <InputNumber placeholder='Please enter Aadhar Number' />,
    // },
  ];
  // user info form on submit function // todo: move to separate files later
  const onSubmit = (values) => {
    const {
      firstName,
      lastName,
      emailId,
      // nickName,
      gender,
      address,
      mobileNumber,
      bankAccountNumber,
      bankIfscCode,
      pan,
      // aadharNumber,
    } = values;

    console.log(`form values  
      ${firstName},
      ${lastName},
      ${emailId},
      ${gender},
      ${address},
      ${mobileNumber},
      ${bankAccountNumber},
      ${bankIfscCode},
      ${pan},
      `);
    // ${nickName},
    // ${aadharNumber}.

    // TODO keep email as readonly ?
    /**
    // TODO
     add in redux functions 
     OR
     call api and save data to a table by {
        creating a new table for user info 
        OR
        updating existing table to accept above new fields
      }
       */
  };

  return (
    <>
      {/* displays USER INFO like name, phone etc */}
      {/* <div className='userDetailsContainer'>
        <h1>{user.given_name}&apos;s Profile Details</h1>
        <p>
          Profile Pic:
          <span style={{ marginLeft: '4px' }}>
            <img src={user.picture} style={{ borderRadius: '50%' }} />
          </span>
        </p>
        <p>
          First Name: <span>{user.given_name}</span>
        </p>
        <p>
          Last Name: <span>{user.family_name}</span>
        </p>
        <p>
          Nick Name: <span>{user.nickname}</span>
        </p>
        <p>
          Email Id: <span>{user.email}</span>
          <span className={user.email_verified ? 'success' : 'error'}>
            {!user.email_verified ? (
              <span
                style={{
                  backgroundColor: 'green',
                  marginLeft: '4px',
                  padding: '2 4px',
                  borderRadius: '4px',
                }}
              >
                {'verified'}
              </span>
            ) : (
              <span
                style={{
                  color: 'red',
                  marginLeft: '4px',
                  padding: '2 4px',
                  borderRadius: '4px',
                }}
              >
                {'verification pending'}
              </span>
            )}
          </span>
        </p>
        <p>
          Gender: <span>{'NA'}</span>
        </p>
        <p>
          Address: <span>{'no address'}</span>
        </p>
        <p>
          Phone Number: <span>{'no phone'}</span>
        </p>
        <p>
          Bank Account No: <span>{'NA'}</span>
        </p>
        <p>
          Bank IFSC: <span>{'NA'}</span>
        </p>
        <p>
          PAN: <span>{'NA'}</span>
        </p>
        <p>
          Aadhar Number: <span>{'NA'}</span>
        </p>
        <p>
          User Id: <span>{user.sub?.split('|')[1]}</span>
        </p>
      </div> */}

      {/* USER INFO FORM to show and update user info */}
      <div className='genericContainer'>
        <Form name='basic' onFinish={onSubmit}>
          <div className='formContainer'>
            <h1>{user.given_name}&apos;s Profile Details</h1>
            <div className='antdFormSpacing'>
              <AntdFormFields data={formUserFielsData} />
              {AntdFormButton}
            </div>
          </div>
        </Form>
      </div>

      {/* PORTFOLIO */}
      <div className='userDetailsContainer'>
        <h1>{user.given_name}&apos;s Portfolio</h1>
        <p>
          Portfolio Value: <span>${totalInvestmentValue.toFixed(2)}</span>
        </p>
        <p>
          Largest Stock Hold: <span>{largestStockHold}</span>
        </p>
        <p>
          Largest Crypto Hold: <span>{largestCryptoHold}</span>
        </p>
      </div>
    </>
  );
};

export default UserDetails;

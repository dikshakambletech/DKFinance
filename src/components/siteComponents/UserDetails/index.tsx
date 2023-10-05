// INTERFACES
import { IUserDetails } from './UserDetailsInterfaces';
// STYLES
import './UserDetails.scss';

const UserDetails = ({ user, profile }: IUserDetails) => {
  const { totalInvestmentValue, stocks, cryptos } = profile;

  const largestStockHold = stocks ? stocks?.highestInvestmentStock : 'N/A';
  const largestCryptoHold = cryptos ? cryptos?.highestInvestedCurrency : 'N/A';

  return (
    <>
      <div className='userDetailsContainer'>
        <h1>{user.given_name}&apos;s Profile Details</h1>
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
          Profile Pic: <span>{user.picture}</span>
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
      </div>
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

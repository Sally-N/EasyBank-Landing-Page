import mockupImg from "../images/image-mockups.png"
import "./reasonsWhy.css"
// import intro from "../images/bg-intro-desktop.svg"



const reasonsWhyItems = [
    {
        iconPath: '..images/icon-online.svg',
        title: 'Online Banking',
        subtitle:
            'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
        iconPath: '..images/icon-budgeting.svg',
        title: 'Simple Budgeting',
        subtitle:
            'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
        iconPath: '..images/icon-onboarding.svg',
        title: 'Fast Onboarding',
        subtitle:
            'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
        iconPath: '..images/icon-api.svg',
        title: 'Open API',
        subtitle:
            'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
]




export const ReasonsWhy = () => {
    return (
        <section className="container all">
            <div className="flex">
                <div className="container next-generation">
                    <h2>
                        Next generation digital banking
                    </h2>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <div className="request-invites">
                        <button id="request-invitebtn">Request Invite</button>
                    </div>
                </div>
                <div className="image">
                    {/* <img src={intro} alt="" /> */}
                    <img src={mockupImg} alt="phones images" />
                </div>
            </div>
            <div className="why-easybank">
                <h5>
                    Why choose Easybank?
                </h5>
                <p>We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before.</p>

            </div>
            <div className="reaonswhygrid">
                {
                    reasonsWhyItems.map((item) =>
                        <div key={item.title}>
                            <div className="icon">
                                <img src={item.iconPath} alt="icon" />
                            </div>
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.subtitle}
                            </p>

                        </div>

                    )};
            </div>
        </section>

    )
};


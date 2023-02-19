import styled, { css } from "styled-components";
import React from "react";

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ManropeSemiBoldMineShaft12px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

export const ManropeNormalSilver12px = css`
  color: var(--silver);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
`;

export const ManropeMediumSilver14px = css`
  color: var(--silver);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeMediumMineShaft14px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeBoldWhite20px = css`
  color: var(--white);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  font-style: normal;
`;

export const ManropeMediumGallery12px = css`
  color: var(--gallery);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeSemiBoldWhite14px = css`
  color: var(--white);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

export const ManropeMediumPewterBlue16px = css`
  color: var(--pewter-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xl);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeBoldScienceBlue40px = css`
  color: var(--science-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxxxxl);
  font-weight: 700;
  font-style: normal;
`;

export const ManropeMediumDodgerBlue14px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeBoldMineShaft24px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
`;

export const GilroyBlackScienceBlue30px = css`
  color: var(--science-blue);
  font-family: var(--font-family-gilroy-black);
  font-size: var(--font-size-xxxxl);
  font-weight: 900;
  font-style: normal;
`;

export const ManropeMediumDodgerBlue12px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeMediumDodgerBlue18px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxl);
  font-weight: 500;
  font-style: normal;
`;

export const ManropeSemiBoldDodgerBlue14px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

export const ManropeSemiBoldWhite8px = css`
  color: var(--white);
  font-family: var(--font-family-manrope);
  font-size: 8px;
  font-weight: 600;
  font-style: normal;
`;

export const ManropeBoldMineShaft14px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
`;

export const ManropeNormalDodgerBlue18px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  font-style: normal;
`;

export const ManropeBoldMineShaft30px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  font-style: normal;
`;

export const ManropeSemiBoldDodgerBlue18px = css`
  color: var(--dodger-blue);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  font-style: normal;
`;

export const ManropeSemiBoldMineShaft14px = css`
  color: var(--mine-shaft);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

class App extends React.Component {
  render() {
    return <Dashboard {...dashboardData} />;
  }
}

export default App;
// import {
//   // ManropeSemiBoldDodgerBlue18px,
//   // ManropeMediumSilver14px,
//   // ManropeMediumMineShaft14px,
//   GilroyBlackScienceBlue30px,
//   ManropeMediumDodgerBlue14px,
//   ManropeBoldMineShaft30px,
//   ManropeBoldMineShaft14px,
//   ManropeMediumDodgerBlue18px,
//   ManropeBoldMineShaft24px,
//   ManropeSemiBoldMineShaft12px,
//   ManropeMediumGallery12px,
//   ManropeSemiBoldWhite14px,
//   ManropeMediumPewterBlue16px,
//   ManropeBoldScienceBlue40px,
//   ManropeSemiBoldDodgerBlue14px,
//   ManropeNormalSilver12px,
//   ManropeSemiBoldMineShaft14px,
//   ManropeBoldWhite20px,
//   ManropeSemiBoldWhite8px,
//   ManropeMediumDodgerBlue12px,
//   ValignTextMiddle,
// } from "../../styledMixins";

class Dashboard extends React.Component {
  render() {
    const {
      fill1152,
      spanText1,
      spanText2,
      iconlyLightOutlineHome,
      iconlyLightOutlineCategory,
      iconlyLightOutlineFolder,
      iconlyLightOutlineChat,
      iconlyLightOutlineSetting,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      group1,
      group2,
      group3,
      group4,
      group5,
      spanText8,
      group6,
      spanText9,
      spanText10,
      spanText11,
      chevronsRight1,
      spanText12,
      spanText13,
      spanText14,
      spanText15,
      spanText16,
      spanText17,
      spanText18,
      spanText19,
      spanText20,
      frame1,
      spanText21,
      spanText22,
      spanText23,
      frame2,
      spanText24,
      search1,
      spanText25,
      spanText26,
      spanText27,
      frame3,
      spanText28,
      spanText29,
      spanText30,
      frame4,
      spanText31,
      spanText32,
      spanText33,
      vsCalendarAlt,
      spanText34,
      book1,
      spanText35,
      spanText36,
      moreVertical1,
      headphones1,
      spanText37,
      spanText38,
      moreVertical2,
      spanText39,
      spanText40,
      moreVertical3,
      spanText41,
      spanText42,
      moreVertical4,
      spanText43,
      spanText44,
      moreVertical8,
      spanText45,
      spanText46,
      moreVertical7,
      headphones2,
      spanText47,
      spanText48,
      moreVertical6,
      book2,
      spanText49,
      spanText50,
      moreVertical5,
      clarityNotificationOutlineBadged,
      rectangle4,
      spanText51,
      spanText52,
      chevronDown1,
      spanText53,
      spanText54,
      spanText55,
      spanText56,
      spanText57,
      spanText58,
      spanText59,
      spanText60,
      spanText61,
      spanText62,
      spanText63,
      spanText64,
      spanText65,
      spanText66,
      spanText67,
      spanText68,
      spanText69,
      spanText70,
      spanText71,
      spanText72,
      group11Props,
      group12Props,
      group13Props,
      group14Props,
      group17Props,
      group15Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dashboard screen">
          <FlexRow>
            <GroupContainer>
              <Group45>
                <Fill1152 src={fill1152} alt="Fill 1152" />
                <Group8>
                  <Place>
                    <span className="gilroy-black-science-blue-30px">{spanText1}</span>
                  </Place>
                  <Ellipse1></Ellipse1>
                 <T>
                    <span className="gilroy-black-science-blue-30px">{spanText2}</span>
                  </T>
                </Group8>
              </Group45>
              <Group42>
                <IconContainer>
                  <IconHome src={iconlyLightOutlineHome} alt="icon-home" />
                  <IconlyLightOutlineCategory src={iconlyLightOutlineCategory} alt="Iconly/Light-outline/Category" />
                  <IconlyLightOutlineFolder src={iconlyLightOutlineFolder} alt="Iconly/Light-outline/Folder" />
                  <IconlyLightOutlineChat src={iconlyLightOutlineChat} alt="Iconly/Light-outline/Chat" />
                  <IconlyLightOutlineFolder src={iconlyLightOutlineSetting} alt="Iconly/Light-outline/Setting" />
                </IconContainer>
               <FlexRow1>
                 <FlexCol>
                   <Overview>
                      <span className="manrope-semi-bold-dodger-blue-14px">{spanText3}{">"}</span>
                    </Overview>
                   <Course>
                      <span className="manrope-medium-silver-14px">{spanText4}</span>
                   </Course>
                  <Course>
                      <span className="manrope-medium-silver-14px">{spanText5}</span>
                    </Course>
                  <Course>
                      <span className="manrope-medium-silver-14px">{spanText6}</span>
                    </Course>
                   <Course>
                      <span className="manrope-medium-silver-14px">{spanText7}</span>
                    </Course>
                 </FlexCol>
                <Ellipse4></Ellipse4>
               </FlexRow1>
             </Group42>
             <OverlapGroup9>
                <Group src={group1} alt="Group" />
                <Group2 src={group2} alt="Group" />
                <Group3 src={group3} alt="Group" />
                <Group4 src={group4} alt="Group" />
                <Group5 src={group5} alt="Group" />
                <BonjourJeSuis>
                  <span>
                    <span className="manrope-semi-bold-white-8px"> </span>
                    {spanText8}
                  </span>
                </BonjourJeSuis>
                 <Group6 src={group6} alt="Group" />
              </OverlapGroup9>
               <OverlapGroup10>
                 <UpgradeYourPlan>
                  <span>
                    <span className="manrope-bold-mine-shaft-14px">{spanText9}</span>
                  </span>
                </UpgradeYourPlan>
                 <FlexRow2>
                   <GoToPRO>
                    <span>
                      <span className="manrope-medium-dodger-blue-12px">{spanText10}</span>
                      <Span10>{spanText11}</Span10>
                    </span>
                  </GoToPRO>
                   <ChevronsRight1 src={chevronsRight1} alt="chevrons-right 1" />
                </FlexRow2>
              </OverlapGroup10>
            </GroupContainer>
             <Rectangle2></Rectangle2>
          </FlexRow>
           <FlexCol1>
             <FlexCol2>
               <FlexRow3>
                 <FlexCol3>
                   <HelloBRUNOWelcomeBack>
                    <span className="manrope-normal-dodger-blue-18px">{spanText12}</span>
                    <span className="manrope-medium-dodger-blue-18px">{spanText13}</span>
                    <Span13>{spanText14}</Span13>
                    <span className="manrope-medium-dodger-blue-18px">{spanText15}</span>
                    <span className="manrope-normal-dodger-blue-18px">{spanText16}</span>
                  </HelloBRUNOWelcomeBack>
                   <FlexRow4>
                     <MyCourses>
                      <span className="manrope-bold-mine-shaft-30px">{spanText17}</span>
                    </MyCourses>
                     <ViewAll>
                      <span className="manrope-medium-dodger-blue-14px">{spanText18}</span>
                    </ViewAll>
                  </FlexRow4>
                   <OverlapGroup1>
                    <Group1
                      intersect1={group11Props.intersect1}
                      intersect2={group11Props.intersect2}
                    />
                     <Language>
                      <span className="manrope-bold-white-20px">{spanText19}</span>
                    </Language>
                     <Address>
                      <span className="manrope-medium-gallery-12px">{spanText20}</span>
                    </Address>
                     <Frame src={frame1} alt="Frame" />
                     <OverlapGroup>
                       <Percent>
                        <span className="manrope-semi-bold-white-14px">{spanText21}</span>
                      </Percent>
                       <Group9></Group9>
                    </OverlapGroup>
                  </OverlapGroup1>
                   <OverlapGroup4>
                    <Group1
                      intersect1={group12Props.intersect1}
                      intersect2={group12Props.intersect2}
                      className={group12Props.className}
                    />
                     <Language1>
                      <span className="manrope-bold-white-20px">{spanText22}</span>
                    </Language1>
                     <Address1>
                      <span className="manrope-medium-gallery-12px">{spanText23}</span>
                    </Address1>
                     <Frame1 src={frame2} alt="Frame" />
                     <OverlapGroup2>
                       <Percent1>
                        <span className="manrope-semi-bold-white-14px">{spanText24}</span>
                      </Percent1>
                       <Ellipse3></Ellipse3>
                    </OverlapGroup2>
                  </OverlapGroup4>
                </FlexCol3>
                 <GroupContainer1>
                   <Group51>
                     <IconSearch src={search1} alt="icon-search" />
                     <Search>
                      <span className="manrope-medium-silver-14px">{spanText25}</span>
                    </Search>
                  </Group51>
                   <OverlapGroup21>
                    <Group1
                      intersect1={group13Props.intersect1}
                      intersect2={group13Props.intersect2}
                      className={group13Props.className}
                    />
                     <Language1>
                      <span className="manrope-bold-white-20px">{spanText26}</span>
                    </Language1>
                     <Address1>
                      <span className="manrope-medium-gallery-12px">{spanText27}</span>
                    </Address1>
                     <Frame2 src={frame3} alt="Frame" />
                     <OverlapGroup3>
                       <Percent2>
                        <span className="manrope-semi-bold-white-14px">{spanText28}</span>
                      </Percent2>
                       <Ellipse31></Ellipse31>
                    </OverlapGroup3>
                  </OverlapGroup21>
                   <OverlapGroup31>
                    <Group1
                      intersect1={group14Props.intersect1}
                      intersect2={group14Props.intersect2}
                      className={group14Props.className}
                    />
                     <Language1>
                      <span className="manrope-bold-white-20px">{spanText29}</span>
                    </Language1>
                     <Address1>
                      <span className="manrope-medium-gallery-12px">{spanText30}</span>
                    </Address1>
                     <Frame3 src={frame4} alt="Frame" />
                     <OverlapGroup>
                       <Percent3>
                        <span className="manrope-semi-bold-white-14px">{spanText31}</span>
                      </Percent3>
                       <Group9></Group9>
                    </OverlapGroup>
                  </OverlapGroup31>
                </GroupContainer1>
              </FlexRow3>
               <FlexRow5>
                 <Planning>
                  <span className="manrope-bold-mine-shaft-24px">{spanText32}</span>
                </Planning>
                 <ViewAll1>
                  <span className="manrope-medium-dodger-blue-14px">{spanText33}</span>
                </ViewAll1>
                 <Group33>
                   <IconCalendar src={vsCalendarAlt} alt="icon-calendar" />
                   <Address2>
                    <span className="manrope-semi-bold-dodger-blue-18px">{spanText34}</span>
                  </Address2>
                </Group33>
              </FlexRow5>
            </FlexCol2>
             <FlexRow6>
               <OverlapGroupContainer>
                 <OverlapGroup12>
                   <OverlapGroup211>
                     <IconHome src={book1} alt="book 1" />
                  </OverlapGroup211>
                   <FlexCol4>
                     <ReadingBeginnerTopic1>
                      <span className="manrope-semi-bold-mine-shaft-12px">{spanText35}</span>
                    </ReadingBeginnerTopic1>
                     <X800AM1000AM>
                      <span className="manrope-normal-silver-12px">{spanText36}</span>
                    </X800AM1000AM>
                  </FlexCol4>
                   <MoreVertical1 src={moreVertical1} alt="more-vertical 1" />
                </OverlapGroup12>
                 <OverlapGroup19>
                   <OverlapGroup20>
                     <IconHome src={headphones1} alt="headphones 1" />
                  </OverlapGroup20>
                   <FlexCol5>
                     <ReadingBeginnerTopic1>
                      <span className="manrope-semi-bold-mine-shaft-12px">{spanText37}</span>
                    </ReadingBeginnerTopic1>
                     <X800AM1000AM>
                      <span className="manrope-normal-silver-12px">{spanText38}</span>
                    </X800AM1000AM>
                  </FlexCol5>
                   <MoreVertical2 src={moreVertical2} alt="more-vertical 2" />
                </OverlapGroup19>
                 <OverlapGroup16>
                   <Rectangle17></Rectangle17>
                  <Group15 />
                   <SpeakingBeginnerTopic1>
                    <span className="manrope-semi-bold-mine-shaft-12px">{spanText39}</span>
                  </SpeakingBeginnerTopic1>
                   <X800AM1200PM>
                    <span className="manrope-normal-silver-12px">{spanText40}</span>
                  </X800AM1200PM>
                   <MoreVertical3 src={moreVertical3} alt="more-vertical 3" />
                </OverlapGroup16>
                 <OverlapGroup14>
                   <Rectangle17></Rectangle17>
                  <Group17 />
                   <SpeakingBeginnerTopic1>
                    <span className="manrope-semi-bold-mine-shaft-12px">{spanText41}</span>
                  </SpeakingBeginnerTopic1>
                   <X800AM1200PM>
                    <span className="manrope-normal-silver-12px">{spanText42}</span>
                  </X800AM1200PM>
                   <MoreVertical3 src={moreVertical4} alt="more-vertical 4" />
                </OverlapGroup14>
              </OverlapGroupContainer>
               <OverlapGroupContainer>
                 <OverlapGroup11>
                  <Group17 className={group17Props.className} />
                   <FlexCol4>
                     <ReadingBeginnerTopic1>
                      <span className="manrope-semi-bold-mine-shaft-12px">{spanText43}</span>
                    </ReadingBeginnerTopic1>
                     <X800AM1000AM>
                      <span className="manrope-normal-silver-12px">{spanText44}</span>
                    </X800AM1000AM>
                  </FlexCol4>
                   <MoreVertical1 src={moreVertical8} alt="more-vertical 8" />
                </OverlapGroup11>
                 <OverlapGroup15>
                  <Group15 className={group15Props.className} />
                   <FlexCol6>
                     <ReadingBeginnerTopic1>
                      <span className="manrope-semi-bold-mine-shaft-12px">{spanText45}</span>
                    </ReadingBeginnerTopic1>
                     <X800AM1000AM>
                      <span className="manrope-normal-silver-12px">{spanText46}</span>
                    </X800AM1000AM>
                  </FlexCol6>
                   <MoreVertical7 src={moreVertical7} alt="more-vertical 7" />
                </OverlapGroup15>
                 <OverlapGroup16>
                   <Rectangle17></Rectangle17>
                   <Rectangle27></Rectangle27>
                   <Headphones2 src={headphones2} alt="headphones 2" />
                   <ListeningBeginnerTopic1>
                    <span className="manrope-semi-bold-mine-shaft-12px">{spanText47}</span>
                  </ListeningBeginnerTopic1>
                   <X800AM1200PM1>
                    <span className="manrope-normal-silver-12px">{spanText48}</span>
                  </X800AM1200PM1>
                   <MoreVertical3 src={moreVertical6} alt="more-vertical 6" />
                </OverlapGroup16>
                 <OverlapGroup14>
                   <Rectangle17></Rectangle17>
                   <Rectangle28></Rectangle28>
                   <Headphones2 src={book2} alt="book 2" />
                   <SpeakingBeginnerTopic1>
                    <span className="manrope-semi-bold-mine-shaft-12px">{spanText49}</span>
                  </SpeakingBeginnerTopic1>
                   <X800AM1200PM>
                    <span className="manrope-normal-silver-12px">{spanText50}</span>
                  </X800AM1200PM>
                   <MoreVertical3 src={moreVertical5} alt="more-vertical 5" />
                </OverlapGroup14>
              </OverlapGroupContainer>
            </FlexRow6>
          </FlexCol1>
           <FlexRow7>
             <Rectangle2></Rectangle2>
             <FlexCol7>
               <FlexRow8>
                 <ClaritynotificationOutlineBadged
                  src={clarityNotificationOutlineBadged}
                  alt="clarity:notification-outline-badged"
                />
                 <OverlapGroup5>
                   <Rectangle4 src={rectangle4} alt="Rectangle 4" />
                   <FlexCol8>
                     <Name>
                      <span className="manrope-semi-bold-mine-shaft-14px">{spanText51}</span>
                    </Name>
                     <BasicPlan>
                      <span className="manrope-medium-dodger-blue-12px">{spanText52}</span>
                    </BasicPlan>
                  </FlexCol8>
                   <ChevronDown1 src={chevronDown1} alt="chevron-down 1" />
                </OverlapGroup5>
              </FlexRow8>
               <Statistics>
                <span className="manrope-bold-mine-shaft-24px">{spanText53}</span>
              </Statistics>
               <OverlapGroupContainer1>
                 <OverlapGroup51>
                   <CoursesCompleted>
                    <span className="manrope-medium-pewter-blue-16px">{spanText54}</span>
                  </CoursesCompleted>
                   <FlexRow9>
                     <Rectangle29></Rectangle29>
                     <Number>
                      <span className="manrope-bold-science-blue-40px">{spanText55}</span>
                    </Number>
                  </FlexRow9>
                </OverlapGroup51>
                 <OverlapGroup6>
                   <TotalPointsGained>
                    <span className="manrope-medium-pewter-blue-16px">{spanText56}</span>
                  </TotalPointsGained>
                   <FlexRow10>
                     <Rectangle29></Rectangle29>
                     <Number1>
                      <span className="manrope-bold-science-blue-40px">{spanText57}</span>
                    </Number1>
                  </FlexRow10>
                </OverlapGroup6>
              </OverlapGroupContainer1>
               <OverlapGroupContainer2>
                 <OverlapGroup51>
                   <CoursesCompleted>
                    <span className="manrope-medium-pewter-blue-16px">{spanText58}</span>
                  </CoursesCompleted>
                   <FlexRow11>
                     <Rectangle29></Rectangle29>
                     <Number2>
                      <span className="manrope-bold-science-blue-40px">{spanText59}</span>
                    </Number2>
                  </FlexRow11>
                </OverlapGroup51>
                 <OverlapGroup51>
                   <CoursesCompleted>
                    <span className="manrope-medium-pewter-blue-16px">{spanText60}</span>
                  </CoursesCompleted>
                   <FlexRow12>
                     <Rectangle29></Rectangle29>
                     <Number2>
                      <span className="manrope-bold-science-blue-40px">{spanText61}</span>
                    </Number2>
                  </FlexRow12>
                </OverlapGroup51>
              </OverlapGroupContainer2>
               <FlexRow13>
                 <Activity>
                  <span className="manrope-bold-mine-shaft-24px">{spanText62}</span>
                </Activity>
                 <Frame11>
                   <Surname>
                    <span className="manrope-medium-silver-14px">{spanText63}</span>
                  </Surname>
                   <Week>
                    <span className="manrope-medium-dodger-blue-14px">{spanText64}</span>
                  </Week>
                   <Month>
                    <span className="manrope-medium-silver-14px">{spanText65}</span>
                  </Month>
                </Frame11>
              </FlexRow13>
               <Group31>
                 <OverlapGroup7>
                   <Rectangle9></Rectangle9>
                   <Rectangle18></Rectangle18>
                   <Rectangle19></Rectangle19>
                   <Rectangle20></Rectangle20>
                   <Rectangle21></Rectangle21>
                   <Rectangle22></Rectangle22>
                   <Rectangle23></Rectangle23>
                </OverlapGroup7>
                 <FlexRow14>
                   <Mon>
                    <span className="manrope-medium-mine-shaft-14px">{spanText66}</span>
                  </Mon>
                   <Tues>
                    <span className="manrope-medium-mine-shaft-14px">{spanText67}</span>
                  </Tues>
                   <Wed>
                    <span className="manrope-medium-mine-shaft-14px">{spanText68}</span>
                  </Wed>
                   <Thurs>
                    <span className="manrope-medium-mine-shaft-14px">{spanText69}</span>
                  </Thurs>
                   <Fri>
                    <span className="manrope-medium-mine-shaft-14px">{spanText70}</span>
                  </Fri>
                   <Sat>
                    <span className="manrope-medium-mine-shaft-14px">{spanText71}</span>
                  </Sat>
                   <Place1>
                    <span className="manrope-medium-mine-shaft-14px">{spanText72}</span>
                  </Place1>
                </FlexRow14>
              </Group31>
            </FlexCol7>
          </FlexRow7>
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 240px;
`;

const GroupContainer = styled.div`
  width: 238px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
  min-height: 1024px;
  background-color: var(--white);
  border-radius: 40px 0px 0px 40px;
`;

const Group45 = styled.div`
  margin-top: 4px;
  margin-left: 1px;
  display: flex;
  align-items: center;
  min-width: 121px;
  gap: 15px;
`;

const Fill1152 = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 1px;
`;

const Group8 = styled.div`
  ${GilroyBlackScienceBlue30px}
  height: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 86px;
  gap: 10px;
`;

const Place = styled.div`
  min-height: 37px;
  margin-top: -1px;
  min-width: 37px;
  letter-spacing: 3px;
  line-height: normal;
`;

const Ellipse1 = styled.div`
  width: 8px;
  height: 8px;
  align-self: center;
  margin-bottom: 1px;
  background-color: var(--dodger-blue);
  border-radius: 4px;
`;

const T = styled.div`
  min-height: 37px;
  margin-top: -1px;
  letter-spacing: 3px;
  line-height: normal;
`;

const Group42 = styled.div`
  height: 281px;
  margin-top: 125px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  min-width: 155px;
  gap: 30px;
`;

const IconContainer = styled.div`
  width: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 281px;
`;

const IconHome = styled.img`
  width: 24px;
  height: 24px;
`;

const IconlyLightOutlineCategory = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 40px;
`;

const IconlyLightOutlineFolder = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 40px;
  margin-left: 1px;
`;

const IconlyLightOutlineChat = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 41px;
  margin-left: 1px;
`;

const FlexRow1 = styled.div`
  height: 275px;
  margin-bottom: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 90px;
  gap: 12px;
`;

const FlexCol = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 275px;
  gap: 45px;
`;

const Overview = styled.div`
  ${ManropeSemiBoldDodgerBlue14px}
  min-height: 19px;
  letter-spacing: 0;
  line-height: normal;
`;

const Course = styled.div`
  ${ManropeMediumSilver14px}
  min-height: 19px;
  letter-spacing: 0;
  line-height: normal;
`;

const Name = styled.div`
  ${ManropeSemiBoldMineShaft14px}
  min-height: 19px;
  letter-spacing: 0;
  line-height: normal;
`;

const Ellipse4 = styled.div`
  width: 8px;
  height: 8px;
  margin-top: 8px;
  background-color: var(--dodger-blue);
  border-radius: 4px;
`;

const OverlapGroup9 = styled.div`
  width: 157px;
  height: 190px;
  position: relative;
  margin-top: 100px;
  margin-right: 0.8px;
`;

const Group = styled.img`
  position: absolute;
  width: 134px;
  height: 11px;
  top: 179px;
  left: 0;
`;

const Group2 = styled.img`
  position: absolute;
  width: 129px;
  height: 120px;
  top: 67px;
  left: 0;
`;

const Group3 = styled.img`
  position: absolute;
  width: 117px;
  height: 172px;
  top: 0;
  left: 15px;
`;

const Group4 = styled.img`
  position: absolute;
  width: 60px;
  height: 37px;
  top: 91px;
  left: 46px;
`;

const Group5 = styled.img`
  position: absolute;
  width: 43px;
  height: 43px;
  top: 41px;
  left: 114px;
`;

const BonjourJeSuis = styled.div`
  ${ValignTextMiddle}
  ${ManropeSemiBoldWhite8px}
            position: absolute;
  width: 34px;
  height: 11px;
  top: 56px;
  left: 119px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group6 = styled.img`
  position: absolute;
  width: 12px;
  height: 10px;
  top: 73px;
  left: 113px;
`;

const OverlapGroup10 = styled.div`
  width: 168px;
  margin-top: 101px;
  display: flex;
  flex-direction: column;
  padding: 19px 0;
  align-items: center;
  min-height: 106px;
  gap: 14px;
  background-color: var(--dodger-blue-2);
  border-radius: 18px;
`;

const UpgradeYourPlan = styled.div`
  ${ValignTextMiddle}
  ${ManropeBoldMineShaft14px}
            width: 124px;
  height: 11px;
  margin-right: 4px;
  letter-spacing: 0;
  line-height: 23px;
  white-space: nowrap;
`;

const FlexRow2 = styled.div`
  height: 30px;
  display: flex;
  padding: 7px 0;
  align-items: flex-start;
  min-width: 128px;
  gap: 49px;
`;

const GoToPRO = styled.div`
  ${ValignTextMiddle}
  ${ManropeMediumDodgerBlue12px}
            width: 58px;
  height: 10px;
  letter-spacing: 0;
  line-height: normal;
`;

const Span10 = styled.span`
  font-family: var(--font-family-manrope);
  font-weight: 800;
  color: var(--dodger-blue);
  font-size: var(--font-size-m);
`;

const ChevronsRight1 = styled.img`
  width: 12px;
  height: 10px;
  align-self: center;
`;

const Rectangle2 = styled.div`
  width: 2px;
  height: 1024px;
  background-color: var(--gallery);
`;

const FlexCol1 = styled.div`
  width: 636px;
  margin-top: 49px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 943px;
  gap: 20px;
`;

const FlexCol2 = styled.div`
  width: 634px;
  margin-left: 1.97px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 520px;
  gap: 39px;
`;

const FlexRow3 = styled.div`
  height: 447px;
  display: flex;
  align-items: flex-end;
  min-width: 634px;
  gap: 26px;
`;

const FlexCol3 = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 447px;
`;

const HelloBRUNOWelcomeBack = styled.div`
  ${ManropeMediumDodgerBlue18px}
  min-height: 25px;
  letter-spacing: 0.9px;
  line-height: normal;
`;

const Span13 = styled.span`
  font-family: var(--font-family-manrope);
  font-weight: 700;
  color: var(--dodger-blue);
  font-size: var(--font-size-xxl);
`;

const FlexRow4 = styled.div`
  height: 41px;
  margin-top: 30px;
  display: flex;
  align-items: flex-end;
  min-width: 250px;
  gap: 30px;
`;

const MyCourses = styled.div`
  ${ManropeBoldMineShaft30px}
  min-height: 41px;
  min-width: 170px;
  letter-spacing: 0;
  line-height: normal;
`;

const ViewAll = styled.div`
  ${ManropeMediumDodgerBlue14px}
  min-height: 19px;
  margin-bottom: 5px;
  min-width: 50px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  margin-top: 21px;
  border-radius: 20px;
`;

const Language = styled.div`
  ${ManropeBoldWhite20px}
  position: absolute;
  top: 14px;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

const Address = styled.div`
  ${ManropeMediumGallery12px}
  position: absolute;
  top: 41px;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame = styled.img`
  position: absolute;
  width: 50px;
  height: 110px;
  top: 20px;
  left: 225px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 78px;
  left: 25px;
  border-radius: 26px;
`;

const Percent = styled.div`
  ${ManropeSemiBoldWhite14px}
  position: absolute;
  top: 16px;
  left: 12px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group9 = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 0;
  left: 0;
  border-radius: 26px;
`;

const OverlapGroup4 = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  margin-top: 30px;
  border-radius: 20px;
`;

const Language1 = styled.div`
  ${ManropeBoldWhite20px}
  position: absolute;
  top: 19px;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

const Address1 = styled.div`
  ${ManropeMediumGallery12px}
  position: absolute;
  top: 46px;
  left: 25px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1 = styled.img`
  position: absolute;
  width: 67px;
  height: 110px;
  top: 20px;
  left: 208px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 77px;
  left: 24px;
`;

const Percent1 = styled.div`
  ${ManropeSemiBoldWhite14px}
  position: absolute;
  top: 16px;
  left: 13px;
  letter-spacing: 0;
  line-height: normal;
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 1px;
  left: 1px;
  border-radius: 26px;
  transform: rotate(-3.14deg);
`;

const GroupContainer1 = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 375px;
`;

const Group51 = styled.div`
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 94px;
  gap: 14px;
`;

const IconSearch = styled.img`
  width: 20px;
  height: 20px;
`;

const Search = styled.div`
  ${ManropeMediumSilver14px}
  min-height: 19px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup21 = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  margin-top: 25px;
  margin-right: 4px;
  border-radius: 20px;
`;

const Frame2 = styled.img`
  position: absolute;
  width: 53px;
  height: 87px;
  top: 42px;
  left: 212px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 53px;
  height: 53px;
  top: 77px;
  left: 24px;
`;

const Percent2 = styled.div`
  ${ManropeSemiBoldWhite14px}
  position: absolute;
  top: 17px;
  left: 13px;
  letter-spacing: 0;
  line-height: normal;
`;

const Ellipse31 = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
  top: 1px;
  left: 1px;
  border-radius: 26px;
  transform: rotate(-1.57deg);
`;

const OverlapGroup31 = styled.div`
  width: 300px;
  height: 150px;
  position: relative;
  margin-top: 30px;
  margin-right: 4px;
  border-radius: 20px;
`;

const Frame3 = styled.img`
  position: absolute;
  width: 90px;
  height: 81px;
  top: 49px;
  left: 184px;
`;

const Percent3 = styled.div`
  ${ManropeSemiBoldWhite14px}
  position: absolute;
  top: 15px;
  left: 12px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow5 = styled.div`
  height: 34px;
  display: flex;
  align-items: flex-start;
  min-width: 632px;
`;

const Planning = styled.div`
  ${ManropeBoldMineShaft24px}
  min-height: 33px;
  min-width: 103px;
  letter-spacing: 0;
  line-height: normal;
`;

const ViewAll1 = styled.div`
  ${ManropeMediumDodgerBlue14px}
  min-height: 19px;
  align-self: center;
  margin-left: 20px;
  margin-top: 7px;
  min-width: 50px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group33 = styled.div`
  height: 25px;
  align-self: flex-end;
  margin-left: 289px;
  display: flex;
  align-items: flex-start;
  min-width: 170px;
  gap: 16px;
`;

const IconCalendar = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-end;
`;

const Address2 = styled.div`
  ${ManropeSemiBoldDodgerBlue18px}
  min-height: 25px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow6 = styled.div`
  height: 403px;
  display: flex;
  align-items: flex-start;
  min-width: 634px;
  gap: 26px;
`;

const OverlapGroupContainer = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 403px;
`;

const OverlapGroup12 = styled.div`
  height: 80px;
  margin-left: 1.97px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 300px;
  background-color: var(--black-haze);
  border-radius: 16px;
`;

const OverlapGroup211 = styled.div`
  height: 50px;
  display: flex;
  padding: 0 13px;
  align-items: center;
  min-width: 50px;
  background-color: #369eff33;
  border-radius: 12px;
`;

const FlexCol4 = styled.div`
  width: 150px;
  margin-left: 15px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 37px;
  gap: 5px;
`;

const ReadingBeginnerTopic1 = styled.p`
  ${ManropeSemiBoldMineShaft12px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const X800AM1000AM = styled.p`
  ${ManropeNormalSilver12px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const BasicPlan = styled.div`
  ${ManropeMediumDodgerBlue12px}
  min-height: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const MoreVertical1 = styled.img`
  width: 4px;
  height: 18px;
  margin-left: 51px;
`;

const OverlapGroup19 = styled.div`
  height: 80px;
  margin-top: 25px;
  margin-left: 1.97px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 300px;
  background-color: var(--black-haze);
  border-radius: 16px;
`;

const OverlapGroup20 = styled.div`
  height: 50px;
  display: flex;
  padding: 0 13px;
  align-items: center;
  min-width: 50px;
  background-color: #8ac53e33;
  border-radius: 12px;
`;

const FlexCol5 = styled.div`
  width: 178px;
  margin-left: 15px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 37px;
  gap: 5px;
`;

const MoreVertical2 = styled.img`
  width: 4px;
  height: 18px;
  margin-left: 23px;
`;

const OverlapGroup16 = styled.div`
  width: 304px;
  height: 96px;
  position: relative;
  margin-top: 17px;
`;

const Rectangle17 = styled.div`
  position: absolute;
  width: 300px;
  height: 80px;
  top: 8px;
  left: 2px;
  background-color: var(--black-haze);
  border-radius: 16px;
  transform: rotate(-3.14deg);
`;

const SpeakingBeginnerTopic1 = styled.p`
  ${ManropeSemiBoldMineShaft12px}
  position: absolute;
  top: 28px;
  left: 82px;
  letter-spacing: 0;
  line-height: normal;
`;

const X800AM1200PM = styled.p`
  ${ManropeNormalSilver12px}
  position: absolute;
  top: 49px;
  left: 82px;
  letter-spacing: 0;
  line-height: normal;
`;

const MoreVertical3 = styled.img`
  position: absolute;
  width: 4px;
  height: 18px;
  top: 39px;
  left: 283px;
`;

const OverlapGroup14 = styled.div`
  width: 304px;
  height: 96px;
  position: relative;
  margin-top: 9px;
`;

const OverlapGroup11 = styled.div`
  height: 80px;
  position: relative;
  margin-left: 1.97px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 300px;
  background-color: var(--black-haze);
  border-radius: 16px;
`;

const OverlapGroup15 = styled.div`
  height: 80px;
  position: relative;
  margin-top: 25px;
  margin-left: 1.97px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  min-width: 300px;
  background-color: var(--black-haze);
  border-radius: 16px;
`;

const FlexCol6 = styled.div`
  width: 161px;
  margin-left: 15px;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 37px;
  gap: 5px;
`;

const MoreVertical7 = styled.img`
  width: 4px;
  height: 18px;
  margin-left: 40px;
`;

const Rectangle27 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 23px;
  left: 17px;
  background-color: var(--sushi);
  border-radius: 12px;
  opacity: 0.2;
`;

const Headphones2 = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 36px;
  left: 30px;
`;

const ListeningBeginnerTopic1 = styled.p`
  ${ManropeSemiBoldMineShaft12px}
  position: absolute;
  top: 28px;
  left: 83px;
  letter-spacing: 0;
  line-height: normal;
`;

const X800AM1200PM1 = styled.p`
  ${ManropeNormalSilver12px}
  position: absolute;
  top: 49px;
  left: 83px;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle28 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 23px;
  left: 17px;
  background-color: var(--dodger-blue);
  border-radius: 12px;
  opacity: 0.2;
`;

const FlexRow7 = styled.div`
  display: flex;
  align-items: center;
  min-width: 446px;
  gap: 40px;
`;

const FlexCol7 = styled.div`
  width: 404px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 952px;
`;

const FlexRow8 = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 392px;
  gap: 120px;
`;

const ClaritynotificationOutlineBadged = styled.img`
  width: 25px;
  height: 26px;
`;

const OverlapGroup5 = styled.div`
  height: 60px;
  display: flex;
  padding: 9px 10px;
  align-items: center;
  min-width: 243px;
  background-color: var(--dodger-blue-2);
  border-radius: 16px;
`;

const Rectangle4 = styled.img`
  width: 40px;
  height: 40px;
`;

const FlexCol8 = styled.div`
  width: 113px;
  align-self: flex-start;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 40px;
  gap: 5px;
`;

const ChevronDown1 = styled.img`
  width: 14px;
  height: 8px;
  margin-left: 31px;
`;

const Statistics = styled.div`
  ${ManropeBoldMineShaft24px}
  min-height: 33px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroupContainer1 = styled.div`
  height: 180px;
  margin-top: 21px;
  display: flex;
  align-items: flex-start;
  min-width: 394px;
  gap: 30px;
`;

const OverlapGroup51 = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 26px 25px;
  align-items: flex-start;
  min-height: 180px;
  gap: 26px;
  background-color: var(--dodger-blue-2);
  border-radius: 20px;
`;

const CoursesCompleted = styled.div`
  ${ManropeMediumPewterBlue16px}
  min-height: 44px;
  margin-top: 3px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow9 = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  min-width: 129px;
  gap: 74px;
`;

const Rectangle29 = styled.div`
  width: 4px;
  height: 30px;
  margin-top: 3px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
`;

const Number = styled.div`
  ${ManropeBoldScienceBlue40px}
  min-height: 55px;
  min-width: 51px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup6 = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  padding: 26px 0;
  align-items: center;
  min-height: 180px;
  gap: 26px;
  background-color: var(--dodger-blue-2);
  border-radius: 20px;
`;

const TotalPointsGained = styled.div`
  ${ManropeMediumPewterBlue16px}
  min-height: 44px;
  margin-top: 3px;
  margin-right: 41px;
  min-width: 89px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow10 = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  min-width: 130px;
  gap: 52px;
`;

const Number1 = styled.h1`
  ${ManropeBoldScienceBlue40px}
  min-height: 55px;
  min-width: 74px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroupContainer2 = styled.div`
  height: 180px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 394px;
  gap: 30px;
`;

const FlexRow11 = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  min-width: 128px;
  gap: 74px;
`;

const Number2 = styled.div`
  ${ManropeBoldScienceBlue40px}
  min-height: 55px;
  min-width: 50px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow12 = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  min-width: 127px;
  gap: 73px;
`;

const FlexRow13 = styled.div`
  height: 33px;
  margin-top: 39px;
  display: flex;
  align-items: flex-end;
  min-width: 389px;
  gap: 163px;
`;

const Activity = styled.div`
  ${ManropeBoldMineShaft24px}
  min-height: 33px;
  min-width: 91px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame11 = styled.div`
  height: 19px;
  margin-bottom: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 135px;
  gap: 15px;
`;

const Surname = styled.div`
  ${ManropeMediumSilver14px}
  min-height: 19px;
  margin-top: -1px;
  min-width: 25px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Week = styled.div`
  ${ManropeMediumDodgerBlue14px}
  min-height: 19px;
  margin-top: -1px;
  min-width: 37px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Month = styled.div`
  ${ManropeMediumSilver14px}
  min-height: 19px;
  margin-top: -1px;
  min-width: 43px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Group31 = styled.div`
  width: 404px;
  margin-top: 41px;
  display: flex;
  flex-direction: column;
  padding: 1px 0;
  align-items: flex-start;
  min-height: 315px;
  gap: 68px;
  border-radius: 20px;
`;

const OverlapGroup7 = styled.div`
  width: 565px;
  height: 107px;
  position: relative;
  margin-top: 118px;
  margin-left: -90.25px;
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 210px;
  height: 30px;
  top: 37px;
  left: 0;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const Rectangle18 = styled.div`
  position: absolute;
  width: 188px;
  height: 30px;
  top: 48px;
  left: 71px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const Rectangle19 = styled.div`
  position: absolute;
  width: 132px;
  height: 30px;
  top: 76px;
  left: 159px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const Rectangle20 = styled.div`
  position: absolute;
  width: 276px;
  height: 30px;
  top: 4px;
  left: 147px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
`;

const Rectangle21 = styled.div`
  position: absolute;
  width: 167px;
  height: 30px;
  top: 58px;
  left: 262px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const Rectangle22 = styled.div`
  position: absolute;
  width: 232px;
  height: 30px;
  top: 26px;
  left: 289px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const Rectangle23 = styled.div`
  position: absolute;
  width: 199px;
  height: 30px;
  top: 42px;
  left: 366px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  transform: rotate(1.57deg);
  opacity: 0.2;
`;

const FlexRow14 = styled.div`
  ${ManropeMediumMineShaft14px}
  height: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 387px;
`;

const Mon = styled.div`
  min-height: 19px;
  min-width: 29px;
  letter-spacing: 0;
  line-height: normal;
`;

const Tues = styled.div`
  min-height: 19px;
  margin-left: 29px;
  min-width: 32px;
  letter-spacing: 0;
  line-height: normal;
`;

const Wed = styled.div`
  min-height: 19px;
  margin-left: 30px;
  min-width: 30px;
  letter-spacing: 0;
  line-height: normal;
`;

const Thurs = styled.div`
  min-height: 19px;
  margin-left: 25px;
  min-width: 38px;
  letter-spacing: 0;
  line-height: normal;
`;

const Fri = styled.div`
  min-height: 19px;
  margin-left: 33px;
  min-width: 16px;
  letter-spacing: 0;
  line-height: normal;
`;

const Sat = styled.div`
  min-height: 19px;
  margin-left: 41px;
  min-width: 23px;
  letter-spacing: 0;
  line-height: normal;
`;

const Place1 = styled.div`
  min-height: 19px;
  margin-left: 35px;
  letter-spacing: 0;
  line-height: normal;
`;

class Group1 extends React.Component {
  render() {
    const { intersect1, intersect2, className } = this.props;

    return (
      <Group11 className={`group-1-1 ${className || ""}`}>
        <Intersect className="intersect" src={intersect1} alt="Intersect" />
       <Intersect1 className="intersect-1" src={intersect2} alt="Intersect" />
     </Group11>
    );
  }
}

const Group11 = styled.div`
  position: absolute;
  height: 150px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 300px;
  gap: 84px;
  background-color: var(--dodger-blue);
  border-radius: 20px;
  box-shadow: 0px 10px 30px #369fff66;

  &amp;.group-1-1.group-3-1 {
    background-color: var(--sushi);
    box-shadow: 0px 10px 30px #8ac53e66;
  }

  &amp;.group-1-1.group-2-1 {
    background-color: #ff983a;
    box-shadow: 0px 10px 30px #ff993a66;
  }

  &amp;.group-1-1.group-4-1 {
    background-color: #ffd042;
    box-shadow: 0px 10px 30px #ffd14366;
  }
`;

const Intersect = styled.img`
  width: 81px;
  height: 41px;
`;

const Intersect1 = styled.img`
  width: 136px;
  height: 80px;
  align-self: flex-end;
`;

class Group15 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group151 className={`group-15 ${className || ""}`}>
        <Volume11 className="volume-1-1" src="volume-1-1-1.png" alt="volume-1 1" />
      </Group151>
    );
  }
}

const Group151 = styled.div`
  position: absolute;
  height: 50px;
  top: 23px;
  left: 17px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  min-width: 50px;
  background-color: var(--sunglow);
  border-radius: 12px;

  &amp;.group-15.group-14 {
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Volume11 = styled.img`
  width: 26px;
  height: 24px;
`;

class Group17 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group171 className={`group-17 ${className || ""}`}>
        <Edit2 className="edit-2" src="edit-2-2.png" alt="edit-2" />
      </Group171>
    );
  }
}

const Group171 = styled.div`
  position: absolute;
  height: 50px;
  top: 23px;
  left: 17px;
  display: flex;
  padding: 0 13px;
  align-items: center;
  min-width: 50px;
  background-color: var(--neon-carrot);
  border-radius: 12px;

  &amp;.group-17.group-16 {
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Edit2 = styled.img`
  width: 24px;
  height: 24px;
`;

const group11Data = {
 intersect1: "intersect-1.png",
 intersect2: "intersect-2.png",
};

const group12Data = {
 intersect1: "intersect-7.png",
 intersect2: "intersect-8.png",
 className: "group-3-1",
};

const group13Data = {
 intersect1: "intersect-3.png",
 intersect2: "intersect-4.png",
 className: "group-2-1",
};

const group14Data = {
 intersect1: "intersect-5.png",
 intersect2: "intersect-6.png",
 className: "group-4-1",
};

const group172Data = {
 className: "group-16",
};

const group152Data = {
 className: "group-14",
};

const dashboardData = {
 fill1152: "fill-1152-1.png",
 spanText1: "SE",
 spanText2: "T",
 iconlyLightOutlineHome: "./assets/iconly-light-outline-home-1.png",
 iconlyLightOutlineCategory: "iconly-light-outline-category-1.png",
 iconlyLightOutlineFolder: "iconly-light-outline-folder-1.png",
 iconlyLightOutlineChat: "iconly-light-outline-chat-1.png",
 iconlyLightOutlineSetting: "iconly-light-outline-setting-1.png",
 spanText3: "Overview",
 spanText4: "Course",
 spanText5: "Resources",
 spanText6: "Message",
 spanText7: "Setting",
 group1: "group-1.png",
 group2: "group-2.png",
 group3: "group-3.png",
 group4: "group-4.png",
 group5: "group-5.png",
 spanText8: (
    <React.Fragment>
      Bonjour
      <br />
      Je suis...
    </React.Fragment>
  ),
 group6: "group-6.png",
 spanText9: "Upgrade your plan",
 spanText10: "Go to ",
 spanText11: "PRO",
 chevronsRight1: "chevrons-right-1-1.png",
 spanText12: "Hello",
 spanText13: " ",
 spanText14: "BRUNO",
 spanText15: ", ",
 spanText16: "welcome back!",
 spanText17: "My Courses",
 spanText18: "View All",
 spanText19: "French",
 spanText20: "35 lessons",
 frame1: "frame-1.png",
 spanText21: "75%",
 spanText22: "Italian",
 spanText23: "20 lessons",
 frame2: "frame-4.png",
 spanText24: "25%",
 search1: "search-1-1.png",
 spanText25: "Search...",
 spanText26: "Portugese",
 spanText27: "30 lessons",
 frame3: "frame-2.png",
 spanText28: "50%",
 spanText29: "German",
 spanText30: "40 lessons",
 frame4: "frame-3.png",
 spanText31: "75%",
 spanText32: "Planning",
 spanText33: "View All",
 vsCalendarAlt: "vs-calendar-alt-1.png",
 spanText34: "20 March 2020",
 book1: "book-2-1.png",
 spanText35: "Reading - Beginner Topic 1",
 spanText36: "8:00 AM - 10:00 AM",
 moreVertical1: "more-vertical-4-1.png",
 headphones1: "headphones-1-1.png",
 spanText37: "Listening - Intermediate Topic 1",
 spanText38: "03:00 PM - 04:00 PM",
 moreVertical2: "more-vertical-4-1.png",
 spanText39: "Speaking - Beginner Topic 1",
 spanText40: "8:00 AM - 12:00 PM",
 moreVertical3: "more-vertical-4-1.png",
 spanText41: "Grammar - Intermediate Topic 2",
 spanText42: "8:00 AM - 12:00 PM",
 moreVertical4: "more-vertical-4-1.png",
 spanText43: "Reading - Beginner Topic 1",
 spanText44: "01:00 PM - 02:00 PM",
 moreVertical8: "more-vertical-4-1.png",
 spanText45: "Speaking - Advanced Topic 1",
 spanText46: "07:00 PM - 08:00 PM",
 moreVertical7: "more-vertical-4-1.png",
 headphones2: "headphones-1-1.png",
 spanText47: "Listening - Beginner Topic 1",
 spanText48: "8:00 AM - 12:00 PM",
 moreVertical6: "more-vertical-4-1.png",
 book2: "book-2-1.png",
 spanText49: "Reading - Advanced Topic 1",
 spanText50: "8:00 AM - 12:00 PM",
 moreVertical5: "more-vertical-4-1.png",
 clarityNotificationOutlineBadged: "clarity-notification-outline-badged-1.png",
 rectangle4: "rectangle-4-1.png",
 spanText51: "Bruno Fernandes",
 spanText52: "Basic Plan",
 chevronDown1: "chevron-down-1-1.png",
 spanText53: "Statistics",
 spanText54: (
    <React.Fragment>
      Courses
      <br />
      Completed
    </React.Fragment>
  ),
 spanText55: "02",
 spanText56: (
    <React.Fragment>
      Total Points
      <br />
      Gained
    </React.Fragment>
  ),
 spanText57: "250",
 spanText58: (
    <React.Fragment>
      Courses
      <br />
      In Progress
    </React.Fragment>
  ),
 spanText59: "03",
 spanText60: (
    <React.Fragment>
      Tasks
      <br />
      Finished
    </React.Fragment>
  ),
 spanText61: "05",
 spanText62: "Activity",
 spanText63: "Day",
 spanText64: "Week",
 spanText65: "Month",
 spanText66: "Mon",
 spanText67: "Tues",
 spanText68: "Wed",
 spanText69: "Thurs",
 spanText70: "Fri",
 spanText71: "Sat",
 spanText72: "Sun",
 group11Props: group11Data,
 group12Props: group12Data,
 group13Props: group13Data,
 group14Props: group14Data,
 group17Props: group172Data,
 group15Props: group152Data,
};

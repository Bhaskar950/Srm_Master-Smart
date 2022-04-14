import React from 'react';
import Card from '../../components/Card';
import image from '../../components/images/bhaskar1.jpeg';
import cdata from '../../../src/cdata';

// console.log(cdata[1].title);
const App = () => {
  return (
    <>
      <h1 className='heading_style'>List of top Netflix series in 2021</h1>
      <Card
        imgSrc={cdata[0].imgSrc}
        title={cdata[0].title}
        link={cdata[0].link}
        sname={cdata[0].sname}
      />
      { <Card
        link=' https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_18_mkw_sHPVHrkzE-dc&mrntrk=pcrid_386559717075_slid__pgrid_82649959887_pgeo_1007743_x__ptid_kwd-816922922808'
        imgSrc={image}
        sname='BHASKAR'
        title="Own Series"
      /> }
      <Card
        imgSrc={cdata[1].imgSrc}
        title={cdata[1].title}
        link={cdata[1].link}
        sname={cdata[1].sname}
      />
      <Card
        imgSrc={cdata[2].imgSrc}
        title={cdata[2].title}
        link={cdata[2].link}
        sname={cdata[2].sname}
      />
      <Card
        imgSrc={cdata[3].imgSrc}
        title={cdata[3].title}
        link={cdata[3].link}
        sname={cdata[3].sname}
      />
      <Card
        imgSrc={cdata[4].imgSrc}
        title={cdata[4].title}
        link={cdata[4].link}
        sname={cdata[4].sname}
      />
      <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[4].imgSrc}
        title={cdata[4].title}
        link={cdata[4].link}
        sname={cdata[4].sname}
      />
      <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
       <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
    </>

  );
};

export default App;



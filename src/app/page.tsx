import { Form } from "@/components/form/form";
import { SideBar } from "@/components/side-bar/side-bar";
import styles from './page.module.scss'

interface DataItem {
  date: string;
  allPayHour: number;
}


export default function Home() {

  const fixPayHour = {
    cook: '250',
    seniorChef: '260',
    sousChef: '270'
  };

  const data: DataItem[] = [
    {date:'10 марта', allPayHour: 3500},
    {date:'12 марта', allPayHour: 3000},
    {date:'14 марта', allPayHour: 2700},
    {date:'15 марта', allPayHour: 3800},
  ] 

  return (
    <div>
      <main className={styles.container}>
        <div className={styles.inner}>

          <div className={styles.sidebar}>
           
            <SideBar data={data}/>
            
          </div>

          <div>
            <Form/>
          </div>
          
        </div>
       
      </main>
    </div>
  );
}

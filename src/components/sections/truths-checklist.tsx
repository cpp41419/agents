
'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import './truths-checklist.css';

const truths = [
  { id: 1, text: "4 DAYS of training in NSW / QLD vs your biggest life purchase (Absolute madness)", checked: false },
  { id: 2, text: "\"Off-market\" properties are often just marketing bait to get your details", checked: false },
  { id: 3, text: "They MUST disclose all material facts about a property - if they don't, report them to Fair Trading", checked: false },
  { id: 4, text: "Commission rates in NSW/QLD are NEGOTIABLE - don't let them tell you otherwise", checked: false },
  {
    id: 5,
    text: "By law, they MUST:",
    checked: false,
    subItems: [
      { id: 51, text: "Have a written agency agreement", checked: false },
      { id: 52, text: "Give you a copy of the agency guide", checked: false },
      { id: 53, text: "Show ALL offers to the seller", checked: false },
      { id: 54, text: "Keep detailed trust account records", checked: false },
    ],
  },
  { id: 6, text: "That \"cooling-off period\" they gloss over? It's YOUR RIGHT (except at auction)", checked: false },
  { id: 7, text: "Their \"local knowledge\" is often just CoreLogic data you can buy yourself", checked: false },
  { id: 8, text: "They can't pressure you to use their \"preferred\" conveyancer - that's illegal", checked: false },
];

const Checkbox = ({ checked, onClick }: { checked: boolean, onClick: () => void }) => (
  <div onClick={onClick} className={`custom-checkbox ${checked ? 'checked' : ''}`}>
    <Check />
  </div>
);

export default function TruthsChecklist() {
  const [items, setItems] = useState(truths);

  const handleToggle = (id: number) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      if (item.subItems) {
        return {
          ...item,
          subItems: item.subItems.map(subItem =>
            subItem.id === id ? { ...subItem, checked: !subItem.checked } : subItem
          ),
        };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="notebook-wrapper">
      <div className="notebook-container">
        <div className="clipboard-clip"></div>
        <div className="notebook-paper">
          <div className="lined-paper">
            <div className="checklist-title">
                <h1 className="main-title">🔥 AUSTRALIAN REAL ESTATE AGENT TRUTHS - NO BULLSHIT VERSION 🔥</h1>
                <p className="sub-title">QLD/NSW EDITION</p>
            </div>

            {items.map((item, index) => (
              <div key={item.id} style={{'--animation-delay': `${index * 0.1}s`} as React.CSSProperties}>
                <div className="checklist-item">
                  <Checkbox checked={item.checked} onClick={() => handleToggle(item.id)} />
                  <label className={`checklist-label ${item.checked ? 'checked' : ''}`}>{item.text}</label>
                </div>
                {item.subItems && (
                  <div className="checklist-sub-items">
                    {item.subItems.map((subItem) => (
                       <div key={subItem.id} className="checklist-item checklist-sub-item">
                         <Checkbox checked={subItem.checked} onClick={() => handleToggle(subItem.id)} />
                         <label className={`checklist-label ${subItem.checked ? 'checked' : ''}`}>{subItem.text}</label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="bonus-truth checklist-item">
              💣 BONUS TRUTH: Property technology is eating their lunch here too - Aussie real estate is due for a massive shakeup.
            </div>

            <p className="mt-8 text-center text-sm text-gray-600">
                Want specific state regulations or ways to leverage these laws? Let's make sure you're not getting screwed Down Under. #AussieRealEstate #PropertyTruth
            </p>
          </div>
        </div>
        <div className="clipboard-ad">
            Ready to become a modern property professional? Visit <a href="https://cpp41419.com.au" target="_blank" rel="noopener noreferrer">CPP41419.com.au</a>
        </div>
      </div>
    </div>
  );
}
